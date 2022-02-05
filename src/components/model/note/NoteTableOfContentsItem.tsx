import React, { useEffect, useMemo, useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Link from '@/components/utils/Link';
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

    const [headingElm, setHeadingElm] = useState<HTMLElement | null>(null);

    const offset = useMemo(() => {
      if (!headingElm) return 0;
      return (
        window.scrollY +
        headingElm.getBoundingClientRect().top -
        headingElm.clientHeight
      );
    }, [headingElm]);

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

    useEffect(() => {
      const elm = document.getElementById(item.id);
      setHeadingElm(elm);
    }, [item.id]);

    return (
      <Box>
        <Link style={{ color: active ? 'red' : null }} href={`#${item.id}`}>
          {item.text}
        </Link>
      </Box>
    );
  });

NoteTableOfContentsItem.displayName = 'NoteTableOfContentsItem';

export default NoteTableOfContentsItem;
