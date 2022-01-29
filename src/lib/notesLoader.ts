import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from 'zenn-markdown-html';
import { Note } from '@/types/note';

export class NotesLoader {
  public static load(slug: string): Note {
    const content = fs.readFileSync(
      path.join(this._getNotesDirectoryPath(), `${slug}.md`),
    );
    const mattered = matter(content);
    const html = markdownToHtml(mattered.content);

    return {
      slug,
      content: html,
      ...mattered.data,
    } as Note;
  }

  public static loadAll(): Note[] {
    const filenames = fs.readdirSync(this._getNotesDirectoryPath());

    return filenames.map(filename => {
      const slug = path.parse(filename).name;
      return this.load(slug);
    });
  }

  private static _getNotesDirectoryPath(): string {
    return path.join(process.cwd(), 'src/notes');
  }
}
