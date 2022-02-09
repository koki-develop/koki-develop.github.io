import React from 'react';
import Layout from '@/components/Layout';
import Meta from '@/components/utils/Meta';
import { Note } from '@/types/note';

export type NotesPageProps = {
  notes: Note[];
};

const NotesPage: React.VFC<NotesPageProps> = React.memo(props => {
  const { notes } = props;

  console.log(notes);

  return (
    <Layout>
      <Meta title='Notes' />
    </Layout>
  );
});

NotesPage.displayName = 'NotesPage';

export default NotesPage;
