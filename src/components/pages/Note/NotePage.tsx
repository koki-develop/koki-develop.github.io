import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import 'zenn-content-css';
import NotePaper from '@/components/model/note/NotePaper';
import NoteTableOfContentsDropdown from '@/components/model/note/NoteTableOfContentsDropdown';
import NoteTableOfContentsPaper from '@/components/model/note/NoteTableOfContentsPaper';
import Link from '@/components/utils/Link';
import Meta from '@/components/utils/Meta';
import { Note } from '@/types/note';
import { Routes } from '@/routes';
import Layout from '@/components/Layout';
import { isDown } from '@/hooks/breakpointsHooks';

export type NotePageProps = {
  note: Note;
};

const NotePage: React.VFC<NotePageProps> = React.memo(props => {
  const { note } = props;

  const isMdDown = isDown('md');

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
          <NoteTableOfContentsDropdown items={note.tableOfContents} />
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
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
});

NotePage.displayName = 'NotePage';

export default NotePage;
