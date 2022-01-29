import React, { useCallback, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import MailIcon from '@mui/icons-material/Mail';
import LinkButton from '@/components/utils/LinkButton';
import { Routes } from '@/routes';

export type ProfileEmailProps = {
  email: string;
};

const ProfileEmail: React.VFC<ProfileEmailProps> = React.memo(props => {
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
    <Box sx={{ alignItems: 'center', display: 'flex', flexFlow: 'column' }}>
      <Box>
        <LinkButton
          startIcon={<MailIcon />}
          href={Routes.mailto(email)}
          external
          sx={{
            fontWeight: 'bold',
            marginBottom: 0.8,
          }}
        >
          {email}
        </LinkButton>
      </Box>

      <Box>
        <CopyToClipboard text={email} onCopy={handleCopyEmail}>
          <Button
            variant='text'
            startIcon={showCopiedMessage ? <DoneIcon color='success' /> : null}
            sx={{
              backgroundColor: 'transparent',
              color: theme => theme.palette.primary.contrastText,
            }}
          >
            {showCopiedMessage ? 'コピーしました' : 'クリップボードにコピー'}
          </Button>
        </CopyToClipboard>
      </Box>
    </Box>
  );
});

ProfileEmail.displayName = 'ProfileEmail';

export default ProfileEmail;
