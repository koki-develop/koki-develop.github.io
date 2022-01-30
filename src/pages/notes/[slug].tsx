import { GetStaticPaths, GetStaticProps } from 'next';
import NotePage, { NotePageProps } from '@/components/pages/Note';
import { NotesLoader } from '@/lib/notesLoader';

export default NotePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const notes = await NotesLoader.loadAll();
  const paths = notes.map(note => `/notes/${note.slug}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  NotePageProps,
  { slug: string }
> = async ({ params }) => {
  const note = await NotesLoader.load(params.slug);

  return {
    props: {
      note,
    },
  };
};
