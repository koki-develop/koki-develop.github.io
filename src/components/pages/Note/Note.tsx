import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Layout from '@/components/Layout';
import { Note } from '@/types/note';
import 'zenn-content-css';

export type NotePageProps = {
  note: Note;
};

const NotePage: React.VFC<NotePageProps> = React.memo(props => {
  const { note } = props;

  return (
    <Layout title={note.title}>
      <Container maxWidth='md'>
        <Box
          className='znc'
          dangerouslySetInnerHTML={{ __html: note.content }}
        />
      </Container>
    </Layout>
  );
});

NotePage.displayName = 'NotePage';

export default NotePage;
