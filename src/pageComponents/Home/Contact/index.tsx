import React, { useCallback, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import MailIcon from '@material-ui/icons/Mail';
import { Config } from '@/types/config';
import Section from '@/components/utils/Section';

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

export type ContactSectionProps = {
  config: Config;
};

const ContactSection: React.VFC<ContactSectionProps> = React.memo(props => {
  const classes = useStyles();

  const { config } = props;

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
    <Section title='Contact'>
      <div className={classes.buttonsContainer}>
        <div>
          <Button
            className={classes.mailButton}
            startIcon={<MailIcon />}
            href={`mailto:${config.profile.email}`}
            target='_blank'
            rel='noreferrer noopener'
          >
            {config.profile.email}
          </Button>
        </div>
        <div>
          <CopyToClipboard text={config.profile.email} onCopy={handleCopyEmail}>
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
    </Section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
