import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import urlJoin from 'url-join';
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
          <Box sx={{ mb: 5 }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2 }}>
              {note.title}
            </Typography>
            <Stack direction='row' spacing={1} sx={{ mb: 2 }}>
              {note.tags.map(tag => (
                <Chip
                  key={tag}
                  sx={{
                    backgroundColor: theme => theme.palette.primary.main,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                  avatar={
                    <img
                      src={urlJoin('/images/icons', `${tag}.svg`)}
                      style={{ maxHeight: '50%', maxWidth: '50%' }}
                      alt={tag}
                    />
                  }
                  label={tag}
                />
              ))}
            </Stack>
            <Typography sx={{ whiteSpace: 'pre' }}>
              {note.description}
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
