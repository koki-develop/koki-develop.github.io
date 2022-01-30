import { GetStaticProps } from 'next';
import { NotesLoader } from '@/lib/notesLoader';
import HomePage, { HomePageProps } from '@/components/pages/Home';

export default HomePage;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const notes = await NotesLoader.loadAll();
  const latestNotes = notes.slice(0, 10);

  return {
    props: {
      latestNotes,
    },
  };
};
