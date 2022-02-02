export type Note = {
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  tableOfContents: TableOfContentsItem[];

  createdAt: string;
  updatedAt?: string;
};

export type TableOfContentsItem = {
  level: 1 | 2 | 3 | 4;
  text: string;
  href: string;
};
