import React from 'react';
import Layout from '@/components/Layout';
import { Note } from '@/types/note';

export type NotePageProps = {
  note: Note;
};

const NotePage: React.VFC<NotePageProps> = React.memo(props => {
  const { note } = props;
  console.log('note:', note);
  return <Layout>notes</Layout>;
});

NotePage.displayName = 'NotePage';

export default NotePage;
