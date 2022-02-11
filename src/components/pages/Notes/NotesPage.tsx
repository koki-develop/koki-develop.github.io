import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useCallback, useMemo, useState } from 'react';
import NoteCardList from '@/components/model/note/NoteCardList';
import Link from '@/components/utils/Link';
import Meta from '@/components/utils/Meta';
import { Note } from '@/types/note';
import { Routes } from '@/routes';
import Layout from '@/components/Layout';

export type NotesPageProps = {
  notes: Note[];
};

const NotesPage: React.VFC<NotesPageProps> = React.memo(props => {
  const { notes } = props;

  const [keyword, setKeyword] = useState<string>('');

  const filteredNotes = useMemo(() => {
    return notes.filter(note => {
      const trimmedKeyword = keyword.trim();
      if (trimmedKeyword === '') return note;
      return note.title.toLowerCase().includes(trimmedKeyword.toLowerCase());
    });
  }, [keyword, notes]);

  const handleChangeKeyword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.currentTarget.value);
    },
    [],
  );

  return (
    <Layout
      breadCrumbs={[
        <Link key='1' href={Routes.home()}>
          Home
        </Link>,
        <Typography key='2' color='text.primary'>
          Notes
        </Typography>,
      ]}
    >
      <Meta title='Notes' />

      <Container maxWidth='lg' sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Box>
                <TextField
                  fullWidth
                  color='secondary'
                  label='キーワード'
                  variant='outlined'
                  onChange={handleChangeKeyword}
                  value={keyword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box></Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <NoteCardList stacked notes={filteredNotes} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
});

NotesPage.displayName = 'NotesPage';

export default NotesPage;
