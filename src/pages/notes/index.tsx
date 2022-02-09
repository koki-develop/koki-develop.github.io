import { GetStaticProps } from 'next';
import { NotesLoader } from '@/lib/notesLoader';
import NotesPage, { NotesPageProps } from '@/components/pages/Notes';

export default NotesPage;

export const getStaticProps: GetStaticProps<NotesPageProps> = async () => {
  const notes = await NotesLoader.loadAll();

  return {
    props: {
      notes,
    },
  };
};
