import React, { useCallback, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '@mui/material/Button';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import DoneIcon from '@mui/icons-material/Done';
import MailIcon from '@mui/icons-material/Mail';

const useStyles = makeStyles(theme =>
  createStyles({
    buttonsContainer: {
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'column',
    },
    mailButton: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(0.8),
      '&:hover': {
        opacity: 1,
      },
    },
    copyButton: {
      backgroundColor: 'transparent',
      color: theme.palette.primary.contrastText,
    },
    copiedIcon: {
      color: theme.palette.success.main,
    },
  }),
);

export type ProfileEmailProps = {
  email: string;
};

const ProfileEmail: React.VFC<ProfileEmailProps> = React.memo(props => {
  const classes = useStyles();

  const { email } = props;

  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);

  const handleCopyEmail = useCallback(() => {
    if (showCopiedMessage) return;
    setShowCopiedMessage(true);
  }, [showCopiedMessage]);

  useEffect(() => {
    if (showCopiedMessage) {
      const timeoutId = setTimeout(() => {
        setShowCopiedMessage(false);
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showCopiedMessage]);

  return (
    <div className={classes.buttonsContainer}>
      <div>
        <Button
          className={classes.mailButton}
          startIcon={<MailIcon />}
          href={`mailto:${email}`}
          target='_blank'
          rel='noreferrer noopener'
        >
          {email}
        </Button>
      </div>
      <div>
        <CopyToClipboard text={email} onCopy={handleCopyEmail}>
          <Button
            className={classes.copyButton}
            variant='text'
            startIcon={
              showCopiedMessage ? (
                <DoneIcon className={classes.copiedIcon} />
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
