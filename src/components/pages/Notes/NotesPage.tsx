import React from 'react';
import Layout from '@/components/Layout';
import Meta from '@/components/utils/Meta';

const NotesPage: React.VFC = React.memo(() => {
  return (
    <Layout>
      <Meta title='Notes' />
    </Layout>
  );
});

NotesPage.displayName = 'NotesPage';

export default NotesPage;
