import React from 'react';
import Chip, { ChipProps } from '@mui/material/Chip';
import urlJoin from 'url-join';

export type NoteTagChipProps = ChipProps & {
  tag: string;
};

const NoteTagChip: React.VFC<NoteTagChipProps> = React.memo(props => {
  const { tag, ...chipProps } = props;

  return (
    <Chip
      {...chipProps}
      sx={{
        backgroundColor: theme => theme.palette.primary.main,
        border: '1px solid',
        borderColor: 'divider',
        cursor: 'inherit',
        ...chipProps.sx,
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
  );
});

NoteTagChip.displayName = 'NoteTagChip';

export default NoteTagChip;
