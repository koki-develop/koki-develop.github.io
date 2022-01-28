import { GetStaticPaths, GetStaticProps } from 'next';
import NotePage, { NotePageProps } from '@/components/pages/Note/Note';
import { NotesLoader } from '@/lib/notesLoader';

export default NotePage;

export const getStaticPaths: GetStaticPaths = () => {
  const notes = NotesLoader.loadAll();
  const paths = notes.map(note => `/notes/${note.slug}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  NotePageProps,
  { slug: string }
> = ({ params }) => {
  const note = NotesLoader.load(params.slug);

  return {
    props: {
      note,
    },
  };
};
