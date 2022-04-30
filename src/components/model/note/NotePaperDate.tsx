import CreateIcon from '@mui/icons-material/Create';
import UpdateIcon from '@mui/icons-material/Update';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import Time from '@/components/utils/Time';

export type NotePaperDateProps = {
  type: 'created' | 'updated';
  date: string;
};

const NotePaperDate: React.VFC<NotePaperDateProps> = React.memo(props => {
  const { type, date } = props;
  const theme = useTheme();

  const [Icon, text] = useMemo(() => {
    switch (type) {
      case 'created':
        return [CreateIcon, '作成'];
      case 'updated':
        return [UpdateIcon, '更新'];
    }
  }, [type]);

  return (
    <Typography
      component='span'
      variant='body2'
      sx={{
        color: theme.palette.text.secondary,
        display: 'flex',
        ml: 1,
      }}
    >
      <Icon fontSize='small' sx={{ mr: 0.5 }} />
      <Box>
        <Time datetime={date} /> に{text}
      </Box>
    </Typography>
  );
});

NotePaperDate.displayName = 'NotePaperDate';

export default NotePaperDate;
