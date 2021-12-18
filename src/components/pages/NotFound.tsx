import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ConfigLoader } from '@/lib/configLoader';
import { Config } from '@/types/config';
import Layout from '@/components/Layout';

export type NotFoundProps = {
  config: Config;
};

const NotFound: NextPage<NotFoundProps> = props => {
  const { config } = props;

  const message = 'お探しのページは見つかりませんでした';

  return (
    <Layout config={config} title={message} hideMenu>
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

export const getStaticProps: GetStaticProps<NotFoundProps> = async () => {
  const config = ConfigLoader.load();

  return {
    props: {
      config,
    },
  };
};
