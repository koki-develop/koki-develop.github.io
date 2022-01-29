import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Layout from '@/components/Layout';
import { Note } from '@/types/note';
import 'zenn-content-css';

export type NotePageProps = {
  note: Note;
};

const NotePage: React.VFC<NotePageProps> = React.memo(props => {
  const { note } = props;

  return (
    <Layout title={note.title} hideSiteName>
      <Container maxWidth='md' disableGutters sx={{ pt: 4 }}>
        <Paper square elevation={2} sx={{ px: { xs: 2, md: 5 }, py: 2 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2 }}>
              {note.title}
            </Typography>
          </Box>

          <Box
            className='znc'
            dangerouslySetInnerHTML={{ __html: note.content }}
          />
        </Paper>
      </Container>
    </Layout>
  );
});

NotePage.displayName = 'NotePage';

export default NotePage;
