import React, { useEffect, useState } from 'react';
import config from '../../config';
import Section from '../../components/section';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Box,
  Button,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import {
  Done as DoneIcon,
  Mail as MailIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonsContainer: {
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'column',
    },
    mailButton: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(0.8),
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
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

const ContactSection: React.VFC = React.memo(() => {
  const classes = useStyles();

  const [showCopied, setShowCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    if (showCopied) return;
    setShowCopied(true);
  };

  useEffect(() => {
    let unmounted = false;
    if (showCopied) {
      setTimeout(() => {
        if (!unmounted) {
          setShowCopied(false);
        }
      }, 1000);
    }

    return () => { unmounted = true; };
  }, [showCopied]);

  return (
    <Section title='Contact'>
      <Box className={classes.buttonsContainer}>
        <Box>
          <Button
            className={classes.mailButton}
            startIcon={<MailIcon/>}
            href={`mailto:${config.email}`}
          >
            {config.email}
          </Button>
        </Box>
        <Box>
          <CopyToClipboard
            text={config.email}
            onCopy={handleCopyEmail}
          >
            <Button
              className={classes.copyButton}
              variant='text'
              startIcon={showCopied ? <DoneIcon className={classes.copiedIcon}/> : null}
            >
              {showCopied ? 'コピーしました' : 'クリップボードにコピー'}
            </Button>
          </CopyToClipboard>
        </Box>
      </Box>
    </Section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
