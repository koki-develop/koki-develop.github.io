import { GetStaticProps } from 'next';
import { NotesLoader } from '@/lib/notesLoader';
import HomePage, { HomePageProps } from '@/components/pages/Home';

export default HomePage;

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  const notes = NotesLoader.loadAll();
  const latestNotes = notes.slice(0, 10);

  return {
    props: {
      latestNotes: latestNotes.map(note => {
        delete note.content;
        delete note.tableOfContents;
        return note;
      }),
    },
  };
};
