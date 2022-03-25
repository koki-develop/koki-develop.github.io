export type Note = {
  slug: string;
  title: string;
  description?: string;
  content: string;
  tags: NoteTag[];
  tableOfContents: TableOfContentsItem[];
  createdAt: string;
  updatedAt: string;

  // NOTE: Zenn, Qiita 用
  // TODO: 移行完了したら削除する
  zenn?: boolean;
  url?: string;
};

export type NoteTag = {
  name: string;
  imageUrl: string;
};

export type TableOfContentsItem = {
  level: 1 | 2 | 3 | 4;
  text: string;
  id: string;
};
