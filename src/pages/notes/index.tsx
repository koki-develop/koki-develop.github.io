import { GetStaticProps } from 'next';
import NotesPage, { NotesPageProps } from '@/components/pages/Notes';
import { NotesLoader } from '@/lib/notesLoader';

export default NotesPage;

export const getStaticProps: GetStaticProps<NotesPageProps> = () => {
  const notes = NotesLoader.loadAll({ withoutContent: true });

  return {
    props: {
      notes,
    },
  };
};
