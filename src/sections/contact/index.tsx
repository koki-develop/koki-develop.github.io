import React from 'react';
import { Config } from '../../config';
import Section from '../../components/section';
import {
  Box,
  Button,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { Mail as MailIcon } from '@material-ui/icons';

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
      color: theme.palette.primary.contrastText,
    },
  }),
);

type ContactSectionProps = {
  config: Config;
};

const ContactSection: React.VFC<ContactSectionProps> = (props: ContactSectionProps) => {
  const classes = useStyles();

  return (
    <Section title='Contact'>
      <Box className={classes.buttonsContainer}>
        <Box>
          <Button
            className={classes.mailButton}
            startIcon={<MailIcon/>}
            href={`mailto:${props.config.email}`}
          >
            {props.config.email}
          </Button>
        </Box>
        <Box>
          <Button
            className={classes.copyButton}
            variant='text'
          >
            クリップボードにコピー
          </Button>
        </Box>
      </Box>
    </Section>
  );
};

export default ContactSection;
