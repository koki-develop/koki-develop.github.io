import React from 'react';
import Layout from '@/components/Layout';

const NotesPage: React.VFC = React.memo(() => {
  return <Layout title='Notes'>notes</Layout>;
});

NotesPage.displayName = 'NotesPage';

export default NotesPage;
