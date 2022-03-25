import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import NoteTagChipList from '@/components/model/note/NoteTagChipList';
import ClickableCard from '@/components/utils/ClickableCard';
import Link from '@/components/utils/Link';
import Time from '@/components/utils/Time';
import { Note } from '@/types/note';
import { Routes } from '@/routes';

export type NoteCardProps = {
  note: Note;
};

const NoteCard: React.VFC<NoteCardProps> = React.memo(props => {
  const { note } = props;

  const theme = useTheme();

  return (
    <Link
      href={note.url ?? Routes.note(note.slug)}
      external={Boolean(note.url)}
    >
      <ClickableCard>
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <Typography
            variant='body2'
            sx={{
              color: theme.palette.text.secondary,
              mb: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {note.zenn && (
              <img
                src='/images/icons/Zenn.svg'
                alt='zenn'
                height={16}
                width={16}
                style={{ marginRight: 8 }}
              />
            )}
            <Time datetime={note.createdAt} />
          </Typography>
          <Typography component='h2' variant='h6' sx={{ mb: 1, flexGrow: 1 }}>
            {note.title}
          </Typography>

          <NoteTagChipList tags={note.tags} />
        </CardContent>
      </ClickableCard>
    </Link>
  );
});

NoteCard.displayName = 'NoteCard';

export default NoteCard;
