import React, { useEffect, useMemo, useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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
      <ListItem disablePadding>
        <ListItemButton
          component='a'
          href={`#${item.id}`}
          sx={{
            backgroundColor: active ? '#eee' : null,
          }}
        >
          <ListItemText
            secondary={item.text}
            secondaryTypographyProps={{
              sx: {
                pl: (item.level - 1) * 2,
                wordBreak: 'break-all',
              },
            }}
          />
        </ListItemButton>
      </ListItem>
    );
  });

NoteTableOfContentsItem.displayName = 'NoteTableOfContentsItem';

export default NoteTableOfContentsItem;
