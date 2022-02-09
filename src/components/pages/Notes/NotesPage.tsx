import React from 'react';
import Container from '@mui/material/Container';
import Layout from '@/components/Layout';
import Meta from '@/components/utils/Meta';
import NoteCardList from '@/components/model/note/NoteCardList';
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

      <Container sx={{ mt: 2 }}>
        <NoteCardList notes={notes} />
      </Container>
    </Layout>
  );
});

NotesPage.displayName = 'NotesPage';

export default NotesPage;
