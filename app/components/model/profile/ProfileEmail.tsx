import React, { memo, useCallback, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCheckmarkSharp, IoMail } from 'react-icons/io5';
import { Routes } from '@/routes';
import Button from '@/components/utils/Button';
import LinkButton from '@/components/utils/LinkButton';

export type ProfileEmailProps = {
  email: string;
};

const ProfileEmail: React.VFC<ProfileEmailProps> = memo(props => {
  const { email } = props;

  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);

  const handleCopyEmail = useCallback(() => {
    if (showCopiedMessage) return;
    setShowCopiedMessage(true);
  }, [showCopiedMessage]);

  useEffect(() => {
    if (!showCopiedMessage) return;

    const timeoutId = setTimeout(() => {
      setShowCopiedMessage(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showCopiedMessage]);

  return (
    <div className='mb-4 flex flex-col items-center'>
      <div className='mb-2'>
        <LinkButton
          href={Routes.mailto(email)}
          external
          buttonProps={{
            startIcon: <IoMail />,
          }}
        >
          {email}
        </LinkButton>
      </div>

      <div>
        <CopyToClipboard text={email} onCopy={handleCopyEmail}>
          <Button
            variant='text'
            startIcon={
              showCopiedMessage ? (
                <IoCheckmarkSharp className='text-green-900' />
              ) : null
            }
          >
            {showCopiedMessage ? 'コピーしました' : 'クリップボードにコピー'}
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  );
});

ProfileEmail.displayName = 'ProfileEmail';

export default ProfileEmail;
