import React, { useCallback, useMemo, useState } from 'react';
import List from '@mui/material/List';
import { TableOfContentsItem } from '@/types/note';
import NoteTableOfContentsItem from '@/components/model/note/NoteTableOfContentsItem';

export type NoteTableOfContentsProps = {
  items: TableOfContentsItem[];
};

const NoteTableOfContents: React.VFC<NoteTableOfContentsProps> = React.memo(
  props => {
    const { items } = props;

    const [activeItemIds, setActiveItemIds] = useState<string[]>([]);
    const activeItemId = useMemo(() => {
      if (activeItemIds.length === 0) return null;
      return activeItemIds.slice(-1)[0];
    }, [activeItemIds]);

    const handleActiveItem = useCallback((item: TableOfContentsItem) => {
      setActiveItemIds(prev => [...prev, item.id]);
    }, []);

    const handleInactiveItem = useCallback((item: TableOfContentsItem) => {
      setActiveItemIds(prev => prev.filter(id => id !== item.id));
    }, []);

    return (
      <List dense>
        {items.map(item => (
          <NoteTableOfContentsItem
            key={item.id}
            item={item}
            active={item.id === activeItemId}
            onActive={handleActiveItem}
            onInactive={handleInactiveItem}
          />
        ))}
      </List>
    );
  },
);

NoteTableOfContents.displayName = 'NoteTableOfContents';

export default NoteTableOfContents;
