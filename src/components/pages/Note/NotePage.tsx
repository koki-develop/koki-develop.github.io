import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CreateIcon from '@mui/icons-material/Create';
import UpdateIcon from '@mui/icons-material/Update';
import 'zenn-content-css';
import Layout from '@/components/Layout';
import NoteTagChipList from '@/components/model/note/NoteTagChipList';
import Meta from '@/components/utils/Meta';
import Link from '@/components/utils/Link';
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

      <Container maxWidth='lg' sx={{ pt: 4 }}>
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

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper square sx={{ px: { xs: 2, md: 5 }, py: 2 }}>
              <Box sx={{ mb: 5 }}>
                <Box sx={{ display: 'flex' }}>
                  <Typography
                    component='span'
                    variant='body2'
                    sx={{
                      color: theme => theme.palette.text.secondary,
                      display: 'flex',
                      mb: 1,
                    }}
                  >
                    <CreateIcon fontSize='small' sx={{ mr: 0.5 }} />
                    <Time datetime={note.createdAt} /> に作成
                  </Typography>
                  {note.createdAt !== note.updatedAt && (
                    <Typography
                      component='span'
                      variant='body2'
                      sx={{
                        color: theme => theme.palette.text.secondary,
                        display: {
                          xs: 'none',
                          sm: 'flex',
                        },
                        ml: 2,
                        mb: 1,
                      }}
                    >
                      <UpdateIcon fontSize='small' sx={{ mr: 0.5 }} />
                      <Time datetime={note.updatedAt} /> に更新
                    </Typography>
                  )}
                </Box>

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
          </Grid>
          <Grid
            item
            xs={0}
            md={4}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Paper
              sx={{
                position: 'sticky',
                top: theme => theme.spacing(2),
              }}
            >
              {note.tableOfContents.map(tableOfContentItem => (
                <Box key={tableOfContentItem.href}>
                  <Link href={tableOfContentItem.href}>
                    {tableOfContentItem.text}
                  </Link>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
});

NotePage.displayName = 'NotePage';

export default NotePage;
