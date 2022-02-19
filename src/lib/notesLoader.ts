import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from 'zenn-markdown-html';
import { HtmlParser } from '@/lib/htmlParser';
import { Note } from '@/types/note';

export type LoadOptions = {
  withoutContent?: boolean;
};

export class NotesLoader {
  public static load(slug: string, options?: LoadOptions): Note {
    const filepath = path.join(this._getNotesDirectoryPath(), `${slug}.md`);
    const content = fs.readFileSync(filepath);
    const mattered = matter(content);
    const html = markdownToHtml(mattered.content);
    const createdAt = mattered.data.createdAt.toISOString();
    const updatedAt = mattered.data.updatedAt?.toISOString() ?? createdAt;

    const document = HtmlParser.parse(html);
    const nodes = document.querySelectorAll('h1, h2, h3, h4');
    const tableOfContents = Array.from(nodes).map(node => {
      const level = new Map([
        ['h1', 1],
        ['h2', 2],
        ['h3', 3],
        ['h4', 4],
      ]).get(node.tagName.toLowerCase());
      return {
        level,
        text: node.textContent,
        id: node.id,
      };
    });

    const note = {
      ...mattered.data,
      slug,
      content: html,
      tableOfContents,
      createdAt,
      updatedAt,
    } as Note;
    if (options?.withoutContent) {
      delete note.content;
      delete note.tableOfContents;
    }

    return note;
  }

  public static loadAll(options?: LoadOptions): Note[] {
    const filenames = fs.readdirSync(this._getNotesDirectoryPath());

    const notes = filenames.map(filename => {
      const slug = path.parse(filename).name;
      return this.load(slug, options);
    });

    return notes.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }

  private static _getNotesDirectoryPath(): string {
    return path.join(process.cwd(), 'notes');
  }
}
