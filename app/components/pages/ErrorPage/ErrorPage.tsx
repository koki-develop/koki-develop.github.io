import React, { memo } from 'react';

export type ErrorPageProps = {
  message: string;
};

const ErrorPage: React.VFC<ErrorPageProps> = memo(props => {
  const { message } = props;

  return (
    <div>
      <div className='my-4'>
        <p className='text-center text-lg font-bold'>{message}</p>
      </div>
    </div>
  );
});

ErrorPage.displayName = 'ErrorPage';

export default ErrorPage;
