import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NoteTagChipList from '@/components/model/note/NoteTagChipList';
import ClickableCard from '@/components/utils/ClickableCard';
import { Note } from '@/types/note';
import { Routes } from '@/routes';

export type NoteCardProps = {
  note: Note;
};

const NoteCard: React.VFC<NoteCardProps> = React.memo(props => {
  const { note } = props;

  return (
    <Link href={Routes.note(note.slug)} passHref>
      <MuiLink>
        <ClickableCard>
          <CardContent>
            <Box>
              <Typography variant='h6' sx={{ mb: 1 }}>
                {note.title}
              </Typography>

              <NoteTagChipList tags={note.tags} />
            </Box>
          </CardContent>
        </ClickableCard>
      </MuiLink>
    </Link>
  );
});

NoteCard.displayName = 'NoteCard';

export default NoteCard;
