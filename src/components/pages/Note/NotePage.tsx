import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { format } from 'date-fns';
import 'zenn-content-css';
import Layout from '@/components/Layout';
import NoteTagChipList from '@/components/model/note/NoteTagChipList';
import Meta from '@/components/utils/Meta';
import LinkButton from '@/components/utils/LinkButton';
import Time from '@/components/utils/Time';
import { Note } from '@/types/note';
import { Routes } from '@/routes';

export type NotePageProps = {
  note: Note;
};

const NotePage: React.VFC<NotePageProps> = React.memo(props => {
  const { note } = props;

  return (
    <Layout>
      <Meta title={note.title} hideSiteName description={note.description} />
      <Container maxWidth='md' disableGutters sx={{ pt: 4 }}>
        <Box sx={{ mb: 2 }}>
          <LinkButton
            href={Routes.notes()}
            size='large'
            startIcon={<KeyboardArrowLeftIcon />}
            sx={{ mx: { xs: 1, md: 0 } }}
          >
            Notes
          </LinkButton>
        </Box>

        <Paper square sx={{ px: { xs: 2, md: 5 }, py: 2 }}>
          <Box sx={{ mb: 5 }}>
            <Typography variant='body2' sx={{ mb: 1 }}>
              <Time datetime={note.updatedAt} /> に更新
            </Typography>
            <Typography
              component='h1'
              variant='h4'
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              {note.title}
            </Typography>
            <Box sx={{ mb: 2 }}>
              <NoteTagChipList tags={note.tags} />
            </Box>
            <Typography>{note.description}</Typography>
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
