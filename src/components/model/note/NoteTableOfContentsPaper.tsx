import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper, { PaperProps } from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import 'zenn-content-css';
import NoteTableOfContents from '@/components/model/note/NoteTableOfContents';
import { TableOfContentsItem } from '@/types/note';

export type NoteTableOfContentsPaperProps = PaperProps & {
  items: TableOfContentsItem[];
  onClickItem?: () => void;
};

const NoteTableOfContentsPaper: React.VFC<NoteTableOfContentsPaperProps> =
  React.forwardRef((props, ref) => {
    const { items, onClickItem, ...paperProps } = props;

    return (
      <Paper
        ref={ref}
        {...paperProps}
        sx={theme => ({
          ...paperProps.sx,
          [theme.breakpoints.down('md')]: {
            width: 300,
          },
        })}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography>目次</Typography>
        </Box>
        <Divider />
        <Box sx={{ maxHeight: { xs: '50vh', md: '80vh' }, overflowY: 'auto' }}>
          <NoteTableOfContents items={items} onClick={onClickItem} />
        </Box>
      </Paper>
    );
  });

NoteTableOfContentsPaper.displayName = 'NoteTableOfContentsPaper';

export default NoteTableOfContentsPaper;
