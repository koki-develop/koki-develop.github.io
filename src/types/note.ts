export type Note = {
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];

  createdAt: string;
  updatedAt?: string;
};
