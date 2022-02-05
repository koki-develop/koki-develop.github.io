import React from 'react';
import Box from '@mui/material/Box';
import { TableOfContentsItem } from '@/types/note';
import NoteTableOfContentsItem from '@/components/model/note/NoteTableOfContentsItem';

export type NoteTableOfContentsProps = {
  items: TableOfContentsItem[];
};

const NoteTableOfContents: React.VFC<NoteTableOfContentsProps> = React.memo(
  props => {
    const { items } = props;

    return (
      <Box>
        {items.map(item => (
          <NoteTableOfContentsItem key={item.id} item={item} />
        ))}
      </Box>
    );
  },
);

NoteTableOfContents.displayName = 'NoteTableOfContents';

export default NoteTableOfContents;
