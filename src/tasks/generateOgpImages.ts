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
  const notes = await NotesLoader.loadAll();

  for (const note of notes) {
    const templatePath = path.join(
      process.cwd(),
      'src/images/note_ogp_template.png',
    );
    await cloudinary.uploader.upload(templatePath, {
      public_id: noteOgpTemplateId,
      type: 'authenticated',
    });

    const url = cloudinary.url(noteOgpTemplateId, {
      sign_url: true,
      type: 'authenticated',
      secure: true,
      transformation: [
        {
          width: 1000,
          crop: 'fit',
          overlay: {
            text: encodeURIComponent(note.title),
            font_family: encodeURIComponent(noteOgpFontId),
            font_size: 48,
          },
        },
      ],
    });

    const { data: buf } = await axios.get(url, { responseType: 'arraybuffer' });
    const outputDir = path.join(process.cwd(), 'public/notes', note.slug);
    const filename = path.join(outputDir, 'ogp.png');
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(filename, buf);
  }
})();
