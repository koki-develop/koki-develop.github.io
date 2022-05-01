import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { differenceInCalendarDays } from 'date-fns';
import React, { useMemo } from 'react';
import 'zenn-content-css';
import NotePaperDate from '@/components/model/note/NotePaperDate';
import NoteTagChipList from '@/components/model/note/NoteTagChipList';
import ShareButton from '@/components/utils/ShareButton';
import { Note } from '@/types/note';
import { Routes } from '@/routes';
import { config } from '@/config';
import { useDown } from '@/hooks/breakpointsHooks';

export type NotePaperProps = {
  note: Note;
};

const NotePaper: React.VFC<NotePaperProps> = React.memo(props => {
  const { note } = props;

  const isMdDown = useDown('md');

  const yearsElapsed = useMemo(() => {
    return Math.trunc(
      differenceInCalendarDays(new Date(), new Date(note.updatedAt)) / 365,
    );
  }, [note.updatedAt]);

  const shareUrl = useMemo(() => {
    return Routes.note(note.slug, { full: true });
  }, [note.slug]);

  return (
    <Paper
      square={isMdDown}
      sx={{ px: { xs: 2, md: 5 }, py: 2, wordBreak: 'break-all' }}
    >
      {yearsElapsed >= 1 && (
        <Alert
          severity={yearsElapsed < 3 ? 'warning' : 'error'}
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          このノートは最終更新日から {yearsElapsed} 年以上が経過しています。
        </Alert>
      )}

      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <NotePaperDate type='created' date={note.createdAt} />
          {note.createdAt !== note.updatedAt && (
            <NotePaperDate type='updated' date={note.updatedAt} />
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
        sx={{ mb: 2 }}
        dangerouslySetInnerHTML={{ __html: note.content }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ShareButton
          sns='twitter'
          url={shareUrl}
          text={`${note.title} | ${config.profile.name}`}
          sx={{ mr: 1 }}
        />
        <ShareButton sns='facebook' url={shareUrl} />
      </Box>
    </Paper>
  );
});

NotePaper.displayName = 'NotePaper';

export default NotePaper;
