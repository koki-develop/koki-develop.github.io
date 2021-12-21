import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from '@/components/Layout';

const NotFound: React.VFC = React.memo(() => {
  const message = 'お探しのページは見つかりませんでした';

  return (
    <Layout title={message} hideMenu>
      <Box sx={{ my: 2 }}>
        <Typography
          sx={theme => ({
            fontSize: theme.typography.h5.fontSize,
            fontWeight: 'bold',
            textAlign: 'center',
          })}
        >
          {message}
        </Typography>
      </Box>
    </Layout>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;
