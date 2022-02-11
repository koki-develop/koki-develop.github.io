import Stack from '@mui/material/Stack';
import React from 'react';
import NoteTagChip from '@/components/model/note/NoteTagChip';

export type NoteTagChipListProps = {
  tags: string[];
};

const NoteTagChipList: React.VFC<NoteTagChipListProps> = React.memo(props => {
  const { tags } = props;

  return (
    <Stack direction='row' spacing={1}>
      {tags.map(tag => (
        <NoteTagChip key={tag} tag={tag} />
      ))}
    </Stack>
  );
});

NoteTagChipList.displayName = 'NoteTagChipList';

export default NoteTagChipList;
