import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NoteTagChip from '@/components/model/note/NoteTagChip';
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
              <Stack direction='row' spacing={1}>
                {note.tags.map(tag => (
                  <NoteTagChip key={tag} tag={tag} sx={{ cursor: 'pointer' }} />
                ))}
              </Stack>
            </Box>
          </CardContent>
        </ClickableCard>
      </MuiLink>
    </Link>
  );
});

NoteCard.displayName = 'NoteCard';

export default NoteCard;
