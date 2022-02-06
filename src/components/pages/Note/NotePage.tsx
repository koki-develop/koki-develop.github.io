import React, { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CreateIcon from '@mui/icons-material/Create';
import UpdateIcon from '@mui/icons-material/Update';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'zenn-content-css';
import Layout from '@/components/Layout';
import NoteTagChipList from '@/components/model/note/NoteTagChipList';
import NoteTableOfContents from '@/components/model/note/NoteTableOfContents';
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

  const [tocButtonEl, setTocButtonEl] = useState<HTMLButtonElement | null>(
    null,
  );

  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickTocItem = useCallback(() => {
    setTocButtonEl(null);
  }, []);

  const handleClickToggleOpenToc = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setTocButtonEl(tocButtonEl ? null : e.currentTarget);
    },
    [tocButtonEl],
  );

  const handleClickAwayTocPopper = useCallback(() => {
    setTocButtonEl(null);
  }, []);

  return (
    <Layout
      headerContent={
        !isMdDown ? null : (
          <Box>
            <Button
              onClick={handleClickToggleOpenToc}
              variant='text'
              color='secondary'
              startIcon={
                tocButtonEl ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )
              }
            >
              目次
            </Button>
            <Popper
              open={Boolean(tocButtonEl)}
              anchorEl={tocButtonEl}
              style={{ zIndex: 1101 }}
              placement='bottom-start'
            >
              <ClickAwayListener
                touchEvent={false}
                onClickAway={handleClickAwayTocPopper}
              >
                <Paper elevation={4}>
                  <Box sx={{ maxHeight: '50vh', overflowY: 'auto' }}>
                    <NoteTableOfContents
                      items={note.tableOfContents}
                      onClick={handleClickTocItem}
                      sx={{
                        minWidth: {
                          xs: '80vw',
                          sm: 400,
                        },
                      }}
                    />
                  </Box>
                </Paper>
              </ClickAwayListener>
            </Popper>
          </Box>
        )
      }
    >
      <Meta
        title={note.title}
        hideSiteName
        description={note.description}
        twitterCard='summary_large_image'
        image={`notes/${note.slug}/ogp.png`}
      />

      <Container maxWidth='lg' disableGutters={isMdDown} sx={{ pt: 4 }}>
        <Box sx={{ mb: 2 }}>
          <LinkButton
            href={Routes.notes()}
            startIcon={<KeyboardDoubleArrowLeftIcon />}
            sx={{ mx: { xs: 1, md: 0 } }}
          >
            Notes
          </LinkButton>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Paper
              square={isMdDown}
              sx={{ px: { xs: 2, md: 5 }, py: 2, wordBreak: 'break-all' }}
            >
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
                className='znc note'
                dangerouslySetInnerHTML={{ __html: note.content }}
              />
            </Paper>
          </Grid>
          <Grid
            item
            xs={0}
            md={3}
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
              <Box sx={{ px: 2, py: 1 }}>
                <Typography>目次</Typography>
              </Box>
              <Divider />
              <Box sx={{ maxHeight: '80vh', overflowY: 'auto' }}>
                <NoteTableOfContents items={note.tableOfContents} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
});

NotePage.displayName = 'NotePage';

export default NotePage;
