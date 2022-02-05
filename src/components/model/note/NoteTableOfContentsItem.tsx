import React, { useEffect, useMemo } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import { Link } from 'react-scroll';
import { TableOfContentsItem } from '@/types/note';

export type NoteTableOfContentsItemProps = {
  item: TableOfContentsItem;
  active: boolean;
  onActive: (item: TableOfContentsItem) => void;
  onInactive: (item: TableOfContentsItem) => void;
};

const NoteTableOfContentsItem: React.VFC<NoteTableOfContentsItemProps> =
  React.memo(props => {
    const { item, active, onActive, onInactive } = props;

    const offset = useMemo(() => {
      if (typeof window === 'undefined') return 0;
      const elm = document.getElementById(item.id);
      return (
        window.scrollY + elm.getBoundingClientRect().top - elm.clientHeight
      );
    }, [item.id]);

    const inView = useScrollTrigger({
      disableHysteresis: true,
      threshold: offset,
    });

    useEffect(() => {
      if (inView) {
        onActive(item);
      } else {
        onInactive(item);
      }
    }, [inView, item, onActive, onInactive]);

    return (
      <Box key={item.id}>
        <Link
          style={{ color: active ? 'red' : null }}
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
