import React from 'react';
import Grid from '@mui/material/Grid';
import NoteCard from '@/components/model/note/NoteCard';
import { Note } from '@/types/note';

export type NoteCardListProps = {
  notes: Note[];
};

const NoteCardList: React.VFC<NoteCardListProps> = React.memo(props => {
  const { notes } = props;

  return (
    <Grid container spacing={2}>
      {notes.map(note => (
        <Grid key={note.slug} item xs={12} sm={6}>
          <NoteCard note={note} />
        </Grid>
      ))}
    </Grid>
  );
});

NoteCardList.displayName = 'NoteCardList';

export default NoteCardList;
