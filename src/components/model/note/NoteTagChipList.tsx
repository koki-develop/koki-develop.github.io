import Stack from '@mui/material/Stack';
import React from 'react';
import NoteTagChip from '@/components/model/note/NoteTagChip';
import { NoteTag } from '@/types/note';

export type NoteTagChipListProps = {
  tags: NoteTag[];
};

const NoteTagChipList: React.VFC<NoteTagChipListProps> = React.memo(props => {
  const { tags } = props;

  return (
    <Stack direction='row' spacing={1}>
      {tags.map(tag => (
        <NoteTagChip key={tag.name} tag={tag} />
      ))}
    </Stack>
  );
});

NoteTagChipList.displayName = 'NoteTagChipList';

export default NoteTagChipList;
