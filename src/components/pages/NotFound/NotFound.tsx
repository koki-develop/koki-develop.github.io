import React from 'react';
import { NextPage } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from '@/components/Layout';

const NotFound: NextPage = () => {
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
};

export default NotFound;
