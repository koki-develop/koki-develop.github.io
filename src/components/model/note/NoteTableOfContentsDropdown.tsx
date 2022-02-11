import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popper from '@mui/material/Popper';
import React, { useCallback, useState } from 'react';
import 'zenn-content-css';
import NoteTableOfContentsPaper from '@/components/model/note/NoteTableOfContentsPaper';
import { TableOfContentsItem } from '@/types/note';

export type NoteTableOfContentsDropdownProps = {
  items: TableOfContentsItem[];
};

const NoteTableOfContentsDropdown: React.VFC<NoteTableOfContentsDropdownProps> =
  React.memo(props => {
    const { items } = props;

    const [tocButtonEl, setTocButtonEl] = useState<HTMLButtonElement | null>(
      null,
    );

    const handleClickTocItem = useCallback(() => {
      setTocButtonEl(null);
    }, []);

    const handleClickToggleOpenToc = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        setTocButtonEl(tocButtonEl ? null : e.currentTarget);
      },
      [tocButtonEl],
    );

    const handleClickAwayTocPopper = useCallback(() => {
      setTocButtonEl(null);
    }, []);

    return (
      <>
        <Button
          onClick={handleClickToggleOpenToc}
          variant='text'
          color='secondary'
          startIcon={
            tocButtonEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          目次
        </Button>
        <Popper
          open={Boolean(tocButtonEl)}
          anchorEl={tocButtonEl}
          style={{ zIndex: 1101 }}
          placement='bottom-start'
        >
          <ClickAwayListener
            touchEvent={false}
            onClickAway={handleClickAwayTocPopper}
          >
            <NoteTableOfContentsPaper
              items={items}
              onClickItem={handleClickTocItem}
            />
          </ClickAwayListener>
        </Popper>
      </>
    );
  });

NoteTableOfContentsDropdown.displayName = 'NoteTableOfContentsDropdown';

export default NoteTableOfContentsDropdown;
