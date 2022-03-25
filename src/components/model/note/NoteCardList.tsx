import Grid from '@mui/material/Grid';
import React from 'react';
import NoteCard from '@/components/model/note/NoteCard';
import { Note } from '@/types/note';

export type NoteCardListProps = {
  notes: Note[];
  stacked?: boolean;
};

const NoteCardList: React.VFC<NoteCardListProps> = React.memo(props => {
  const { notes, stacked } = props;

  return (
    <Grid container spacing={2}>
      {notes.map(note => (
        <Grid
          key={`${note.zenn ? 'zenn-' : ''}${note.slug}`}
          item
          xs={12}
          sm={stacked ? 12 : 6}
        >
          <NoteCard note={note} />
        </Grid>
      ))}
    </Grid>
  );
});

NoteCardList.displayName = 'NoteCardList';

export default NoteCardList;
