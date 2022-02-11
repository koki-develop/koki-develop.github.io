import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Popper from '@mui/material/Popper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useCallback, useState } from 'react';
import 'zenn-content-css';
import NotePaper from '@/components/model/note/NotePaper';
import NoteTableOfContentsPaper from '@/components/model/note/NoteTableOfContentsPaper';
import Link from '@/components/utils/Link';
import Meta from '@/components/utils/Meta';
import { Note } from '@/types/note';
import { Routes } from '@/routes';
import Layout from '@/components/Layout';

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
      breadCrumbs={[
        <Link key='1' href={Routes.home()}>
          Home
        </Link>,
        <Link key='2' href={Routes.notes()}>
          Notes
        </Link>,
        <Typography key='3' color='text.primary'>
          {note.title}
        </Typography>,
      ]}
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
                <NoteTableOfContentsPaper
                  items={note.tableOfContents}
                  onClickItem={handleClickTocItem}
                />
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

      <Container maxWidth='lg' disableGutters={isMdDown} sx={{ pt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <NotePaper note={note} />
          </Grid>
          <Grid
            item
            xs={0}
            md={3}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <NoteTableOfContentsPaper
              sx={{
                position: 'sticky',
                top: theme => theme.spacing(2),
              }}
              items={note.tableOfContents}
              onClickItem={handleClickTocItem}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
});

NotePage.displayName = 'NotePage';

export default NotePage;
