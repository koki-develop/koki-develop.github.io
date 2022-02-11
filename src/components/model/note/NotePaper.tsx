import CreateIcon from '@mui/icons-material/Create';
import UpdateIcon from '@mui/icons-material/Update';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import 'zenn-content-css';
import NoteTagChipList from '@/components/model/note/NoteTagChipList';
import Time from '@/components/utils/Time';
import { Note } from '@/types/note';
import { isDown } from '@/hooks/breakpointsHooks';

export type NotePaperProps = {
  note: Note;
};

const NotePaper: React.VFC<NotePaperProps> = React.memo(props => {
  const { note } = props;

  const isMdDown = isDown('md');

  return (
    <Paper
      square={isMdDown}
      sx={{ px: { xs: 2, md: 5 }, py: 2, wordBreak: 'break-all' }}
    >
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex' }}>
          <Typography
            component='span'
            variant='body2'
            sx={{
              color: theme => theme.palette.text.secondary,
              display: 'flex',
              mb: 1,
            }}
          >
            <CreateIcon fontSize='small' sx={{ mr: 0.5 }} />
            <Time datetime={note.createdAt} /> に作成
          </Typography>
          {note.createdAt !== note.updatedAt && (
            <Typography
              component='span'
              variant='body2'
              sx={{
                color: theme => theme.palette.text.secondary,
                display: {
                  xs: 'none',
                  sm: 'flex',
                },
                ml: 2,
                mb: 1,
              }}
            >
              <UpdateIcon fontSize='small' sx={{ mr: 0.5 }} />
              <Time datetime={note.updatedAt} /> に更新
            </Typography>
          )}
        </Box>

        <Typography
          component='h1'
          variant='h4'
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          {note.title}
        </Typography>
        <Box>
          <NoteTagChipList tags={note.tags} />
        </Box>
        {note.description && (
          <Typography sx={{ mt: 2 }}>{note.description}</Typography>
        )}
      </Box>

      <Box
        className='znc note'
        dangerouslySetInnerHTML={{ __html: note.content }}
      />
    </Paper>
  );
});

NotePaper.displayName = 'NotePaper';

export default NotePaper;
