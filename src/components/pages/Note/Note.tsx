import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Layout from '@/components/Layout';
import NoteTagChipList from '@/components/model/note/NoteTagChipList';
import Meta from '@/components/utils/Meta';
import { Note } from '@/types/note';
import 'zenn-content-css';
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
          <Link passHref href={Routes.notes()}>
            <Button
              size='large'
              startIcon={<KeyboardArrowLeftIcon />}
              sx={{ mx: { xs: 1, md: 0 } }}
            >
              Notes
            </Button>
          </Link>
        </Box>

        <Paper square sx={{ px: { xs: 2, md: 5 }, py: 2 }}>
          <Box sx={{ mb: 5 }}>
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
