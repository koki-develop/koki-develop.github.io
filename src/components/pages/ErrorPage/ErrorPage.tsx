import React, { memo } from 'react';
import Meta from '@/components/utils/Meta';

export type ErrorPageProps = {
  message: string;
};

const ErrorPage: React.VFC<ErrorPageProps> = memo(props => {
  const { message } = props;

  return (
    <div>
      <Meta title={message} />

      <div className='my-4'>
        <p className='text-center text-lg font-bold'>{message}</p>
      </div>
    </div>
  );
});

ErrorPage.displayName = 'ErrorPage';

export default ErrorPage;
