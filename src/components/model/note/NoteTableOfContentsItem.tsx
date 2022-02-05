import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-scroll';
import { TableOfContentsItem } from '@/types/note';

export type NoteTableOfContentsItemProps = {
  item: TableOfContentsItem;
};

const NoteTableOfContentsItem: React.VFC<NoteTableOfContentsItemProps> =
  React.memo(props => {
    const { item } = props;

    return (
      <Box key={item.id}>
        <Link
          href={`#${item.id}`}
          to={item.id}
          smooth
          duration={300}
          onSetActive={() => console.log(item.text)}
        >
          {item.text}
        </Link>
      </Box>
    );
  });

NoteTableOfContentsItem.displayName = 'NoteTableOfContentsItem';

export default NoteTableOfContentsItem;
