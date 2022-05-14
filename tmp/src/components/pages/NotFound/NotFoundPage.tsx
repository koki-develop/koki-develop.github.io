import React, { memo } from 'react';
import Meta from '@/components/utils/Meta';
import Layout from '@/components/Layout';

const NotFoundPage: React.VFC = memo(() => {
  const message = 'お探しのページは見つかりませんでした';

  return (
    <Layout>
      <Meta title={message} />
      <div className='my-4'>
        <p className='text-center text-lg font-bold'>{message}</p>
      </div>
    </Layout>
  );
});

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
