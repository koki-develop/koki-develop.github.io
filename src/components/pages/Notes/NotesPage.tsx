import React, { useCallback, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Layout from '@/components/Layout';
import Meta from '@/components/utils/Meta';
import NoteCardList from '@/components/model/note/NoteCardList';
import { Note } from '@/types/note';

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
    <Layout>
      <Meta title='Notes' />

      <Container maxWidth='lg' sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={0}
            md={3}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
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
                    sx: { pr: 1 },
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={9}>
            <NoteCardList stacked notes={filteredNotes} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
});

NotesPage.displayName = 'NotesPage';

export default NotesPage;
