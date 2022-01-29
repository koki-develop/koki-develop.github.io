import { GetStaticProps } from 'next';
import { NotesLoader } from '@/lib/notesLoader';
import HomePage, { HomePageProps } from '@/components/pages/Home';

export default HomePage;

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  const latestNotes = NotesLoader.loadAll().slice(0, 10);

  return {
    props: {
      latestNotes,
    },
  };
};
