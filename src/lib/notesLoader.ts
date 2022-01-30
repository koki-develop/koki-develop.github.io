import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from 'zenn-markdown-html';
import { Note } from '@/types/note';

export class NotesLoader {
  public static async load(slug: string): Promise<Note> {
    const filepath = path.join(this._getNotesDirectoryPath(), `${slug}.md`);
    const content = fs.readFileSync(filepath);
    const mattered = matter(content);
    const html = markdownToHtml(mattered.content);
    const createdAt = mattered.data.createdAt.toISOString();
    const updatedAt = mattered.data.updatedAt?.toISOString() ?? createdAt;

    return {
      ...mattered.data,
      slug,
      content: html,
      createdAt,
      updatedAt,
    } as Note;
  }

  public static async loadAll(): Promise<Note[]> {
    const filenames = fs.readdirSync(this._getNotesDirectoryPath());

    const notes = await Promise.all(
      filenames.map(filename => {
        const slug = path.parse(filename).name;
        return this.load(slug);
      }),
    );

    return notes.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }

  private static _getNotesDirectoryPath(): string {
    return path.join(process.cwd(), 'src/notes');
  }
}
