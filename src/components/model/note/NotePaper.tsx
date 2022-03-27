import CreateIcon from '@mui/icons-material/Create';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import UpdateIcon from '@mui/icons-material/Update';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { differenceInCalendarDays } from 'date-fns';
import React, { useMemo } from 'react';
import 'zenn-content-css';
import NoteTagChipList from '@/components/model/note/NoteTagChipList';
import Link from '@/components/utils/Link';
import Time from '@/components/utils/Time';
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
          <Typography
            component='span'
            variant='body2'
            sx={{
              color: theme => theme.palette.text.secondary,
              display: 'flex',
            }}
          >
            <CreateIcon fontSize='small' sx={{ mr: 0.5 }} />
            <Box>
              <Time datetime={note.createdAt} /> に作成
            </Box>
          </Typography>
          {note.createdAt !== note.updatedAt && (
            <Typography
              component='span'
              variant='body2'
              sx={{
                color: theme => theme.palette.text.secondary,
                display: 'flex',
                ml: 1,
              }}
            >
              <UpdateIcon fontSize='small' sx={{ mr: 0.5 }} />
              <Box>
                <Time datetime={note.updatedAt} /> に更新
              </Box>
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
        sx={{ mb: 2 }}
        dangerouslySetInnerHTML={{ __html: note.content }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link
          external
          href={`https://twitter.com/share?url=${encodeURIComponent(
            Routes.note(note.slug, {
              full: true,
            }),
          )}&text=${encodeURIComponent(
            `${note.title} | ${config.profile.name}`,
          )}`}
          sx={{ mr: 1 }}
        >
          <TwitterIcon fontSize='large' htmlColor='#1DA1F2' />
        </Link>
        <Link
          external
          href={`https://www.facebook.com/share.php?u=${encodeURIComponent(
            Routes.note(note.slug, { full: true }),
          )}`}
        >
          <FacebookIcon fontSize='large' htmlColor='#1877F2' />
        </Link>
      </Box>
    </Paper>
  );
});

NotePaper.displayName = 'NotePaper';

export default NotePaper;
