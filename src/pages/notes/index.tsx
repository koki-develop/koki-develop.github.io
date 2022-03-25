import { GetStaticProps } from 'next';
import NotesPage, { NotesPageProps } from '@/components/pages/Notes';
import { NotesLoader } from '@/lib/notesLoader';

export default NotesPage;

export const getStaticProps: GetStaticProps<NotesPageProps> = async () => {
  const notes = await NotesLoader.loadAll({
    withoutContent: true,
    withZennArticles: true,
  });

  return {
    props: {
      notes,
    },
  };
};
