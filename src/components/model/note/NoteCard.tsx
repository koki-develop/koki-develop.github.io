import React from 'react';
import { Note } from '@/types/note';

export type NoteCardProps = {
  note: Note;
};

const NoteCard: React.VFC<NoteCardProps> = React.memo(props => {
  const { note } = props;
  return <div>{note.title}</div>;
});

NoteCard.displayName = 'NoteCard';

export default NoteCard;
