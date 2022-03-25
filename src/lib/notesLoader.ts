import fs from 'fs';
import path from 'path';
import axios from 'axios';
import matter from 'gray-matter';
import urlJoin from 'url-join';
import markdownToHtml from 'zenn-markdown-html';
import { HtmlParser } from '@/lib/htmlParser';
import { Note } from '@/types/note';

type ZennArticle = {
  published: boolean;
  slug: string;
  title: string;
  published_at: string;
  topics: ZennArticleTopic[];
};

type ZennArticleTopic = {
  display_name: string;
};

export type LoadOptions = {
  withoutContent?: boolean;
  // TODO: Zenn からの移行が完了したら削除する
  withZennArticles?: boolean;
};

export class NotesLoader {
  public static load(slug: string, options?: LoadOptions): Note {
    const filepath = path.join(this._getNotesDirectoryPath(), `${slug}.md`);
    const content = fs.readFileSync(filepath);
    const mattered = matter(content);
    const html = markdownToHtml(mattered.content);
    const tags = mattered.data.tags.map(tag => ({
      name: tag,
      imageUrl: urlJoin('/images/icons', `${tag.name}.svg`),
    }));
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
      tags,
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

  public static async loadAll(options?: LoadOptions): Promise<Note[]> {
    const filenames = fs.readdirSync(this._getNotesDirectoryPath());

    const notes = filenames.map(filename => {
      const slug = path.parse(filename).name;
      return this.load(slug, options);
    });

    if (options.withZennArticles) {
      const zennNotes = await this._fetchZennArticles();
      notes.push(...zennNotes);
    }

    return notes.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }

  private static _getNotesDirectoryPath(): string {
    return path.join(process.cwd(), 'notes');
  }

  private static async _fetchZennArticles(): Promise<Note[]> {
    const movedSlugs: string[] = [
      'ruby-aes-enc-dec',
      'js-clone-array',
      'js-sort-array-without-changing-original-array',
    ];

    const endpoint = 'https://zenn.dev/api/articles?username=kou_pg_0131';
    const { data } = await axios.get<{ articles: ZennArticle[] }>(endpoint);

    return data.articles
      .filter(
        article => article.published && !movedSlugs.includes(article.slug),
      )
      .map(
        article =>
          ({
            zenn: true,
            slug: article.slug,
            title: article.title,
            url: `https://zenn.dev/kou_pg_0131/articles/${article.slug}`,
            tags: article.topics.map(topic => ({
              name: topic.display_name,
              imageUrl: urlJoin('/images/icons', `${topic.display_name}.svg`),
            })),
            createdAt: article.published_at,
          } as Note),
      );
  }
}
