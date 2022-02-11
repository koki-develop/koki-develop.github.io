import { GetStaticProps } from 'next';
import { NotesLoader } from '@/lib/notesLoader';
import NotesPage, { NotesPageProps } from '@/components/pages/Notes';

export default NotesPage;

export const getStaticProps: GetStaticProps<NotesPageProps> = () => {
  const notes = NotesLoader.loadAll();

  return {
    props: {
      notes: notes.map(note => {
        delete note.content;
        delete note.tableOfContents;
        return note;
      }),
    },
  };
};
