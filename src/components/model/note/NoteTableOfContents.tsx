import List, { ListProps } from '@mui/material/List';
import React, { useCallback, useMemo, useState } from 'react';
import NoteTableOfContentsItem from '@/components/model/note/NoteTableOfContentsItem';
import { TableOfContentsItem } from '@/types/note';

export type NoteTableOfContentsProps = ListProps & {
  items: TableOfContentsItem[];
  onClick?: (item: TableOfContentsItem) => void;
};

const NoteTableOfContents: React.VFC<NoteTableOfContentsProps> = React.memo(
  props => {
    const { items, onClick, ...listProps } = props;

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
      <List dense {...listProps}>
        {items.map(item => (
          <NoteTableOfContentsItem
            key={item.id}
            item={item}
            active={item.id === activeItemId}
            onActive={handleActiveItem}
            onInactive={handleInactiveItem}
            onClick={onClick}
          />
        ))}
      </List>
    );
  },
);

NoteTableOfContents.displayName = 'NoteTableOfContents';

export default NoteTableOfContents;
