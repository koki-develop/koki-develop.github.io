import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import urlJoin from 'url-join';
import { Note } from '@/types/note';
import { Routes } from '@/routes';

export type NoteCardProps = {
  note: Note;
};

const NoteCard: React.VFC<NoteCardProps> = React.memo(props => {
  const { note } = props;

  return (
    <Link href={Routes.note(note.slug)}>
      <a>
        <Card>
          <CardContent>
            <Box>
              <Typography variant='h6' sx={{ mb: 1 }}>
                {note.title}
              </Typography>
              <Stack direction='row' spacing={1}>
                {note.tags.map(tag => (
                  <Chip
                    key={tag}
                    sx={{
                      backgroundColor: theme => theme.palette.primary.main,
                      border: '1px solid',
                      borderColor: 'divider',
                      cursor: 'pointer',
                    }}
                    avatar={
                      <img
                        src={urlJoin('/images/icons', `${tag}.svg`)}
                        style={{ maxHeight: '50%', maxWidth: '50%' }}
                        alt={tag}
                      />
                    }
                    label={tag}
                  />
                ))}
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
});

NoteCard.displayName = 'NoteCard';

export default NoteCard;
