import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Box,
  Button,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import {
  Done as DoneIcon,
  Mail as MailIcon,
} from '@material-ui/icons';
import { Config } from '@/types/config';
import Section from '@/components/Section';

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

export type ContactSectionProps = {
  config: Config;
};

const ContactSection: React.VFC<ContactSectionProps> = React.memo(props => {
  const classes = useStyles();

  const { config } = props;

  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);

  const handleCopyEmail = () => {
    if (showCopiedMessage) return;
    setShowCopiedMessage(true);
  };

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
    <Section title='Contact'>
      <Box className={classes.buttonsContainer}>
        <Box>
          <Button
            className={classes.mailButton}
            startIcon={<MailIcon />}
            href={`mailto:${config.profile.email}`}
          >
            {config.profile.email}
          </Button>
        </Box>
        <Box>
          <CopyToClipboard
            text={config.profile.email}
            onCopy={handleCopyEmail}
          >
            <Button
              className={classes.copyButton}
              variant='text'
              startIcon={showCopiedMessage ? <DoneIcon className={classes.copiedIcon} /> : null}
            >
              {showCopiedMessage ? 'コピーしました' : 'クリップボードにコピー'}
            </Button>
          </CopyToClipboard>
        </Box>
      </Box>
    </Section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
