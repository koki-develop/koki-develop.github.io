import { GetStaticProps } from 'next';
import HomePage, { HomePageProps } from '@/components/pages/Home';
import { NotesLoader } from '@/lib/notesLoader';

export default HomePage;

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  const notes = NotesLoader.loadAll({ withoutContent: true });
  const latestNotes = notes.slice(0, 10);

  return {
    props: {
      latestNotes,
    },
  };
};
