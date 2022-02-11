import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Meta from '@/components/utils/Meta';
import Layout from '@/components/Layout';

const NotFoundPage: React.VFC = React.memo(() => {
  const message = 'お探しのページは見つかりませんでした';

  return (
    <Layout>
      <Meta title={message} />
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

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
