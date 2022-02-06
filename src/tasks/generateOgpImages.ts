import fs from 'fs';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';
import axios from 'axios';
import { NotesLoader } from '@/lib/notesLoader';

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;
const noteOgpTemplateId = 'Koki Sato/note_ogp_template';
const noteOgpFontId = 'NotoSansJP-Regular.otf';

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

(async () => {
  console.info('OGP 画像を生成します');

  const notes = await NotesLoader.loadAll();

  const noteTemplatePath = path.join(
    process.cwd(),
    'src/images/note_ogp_template.png',
  );
  console.info(`"${noteTemplatePath}" をアップロードします`);
  const uploadResponse = await cloudinary.uploader.upload(noteTemplatePath, {
    public_id: noteOgpTemplateId,
    type: 'authenticated',
  });
  console.info('アップロードしました');

  for (const note of notes) {
    console.info(`${note.slug} の OGP 画像 URL を生成します`);
    const url = cloudinary.url(noteOgpTemplateId, {
      sign_url: true,
      version: uploadResponse.version,
      type: 'authenticated',
      secure: true,
      transformation: [
        {
          width: 1000,
          crop: 'fit',
          overlay: {
            text: encodeURIComponent(note.title),
            font_family: encodeURIComponent(noteOgpFontId),
            font_size: 56,
          },
        },
      ],
    });
    console.info('生成しました:', url);

    console.info('OGP 画像をダウンロードします');
    const { data: buf } = await axios.get(url, { responseType: 'arraybuffer' });
    console.info('ダウンロードしました');

    const outputDir = path.join(process.cwd(), 'public/notes', note.slug);
    const filepath = path.join(outputDir, 'ogp.png');
    console.info(`"${filepath}" に OGP 画像を保存します`);
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(filepath, buf);
    console.info('保存しました');
  }
})();
