import Chip from '@mui/material/Chip';
import React from 'react';
import { NoteTag } from '@/types/note';

export type NoteTagChipProps = {
  tag: NoteTag;
};

const NoteTagChip: React.VFC<NoteTagChipProps> = React.memo(props => {
  const { tag } = props;

  return (
    <Chip
      label={tag.name}
      avatar={
        <img
          src={tag.imageUrl}
          style={{ maxHeight: '50%', maxWidth: '50%' }}
          alt={tag.name}
        />
      }
      sx={{
        backgroundColor: theme => theme.palette.primary.main,
        border: '1px solid',
        borderColor: 'divider',
        cursor: 'inherit',
      }}
    />
  );
});

NoteTagChip.displayName = 'NoteTagChip';

export default NoteTagChip;
