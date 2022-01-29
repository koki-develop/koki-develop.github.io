import React from 'react';
import { Note } from '@/types/note';
import NoteCard from '@/components/model/note/NoteCard';

export type NoteCardListProps = {
  notes: Note[];
};

const NoteCardList: React.VFC<NoteCardListProps> = React.memo(props => {
  const { notes } = props;

  return (
    <div>
      {notes.map(note => (
        <NoteCard key={note.slug} note={note} />
      ))}
    </div>
  );
});

NoteCardList.displayName = 'NoteCardList';

export default NoteCardList;
