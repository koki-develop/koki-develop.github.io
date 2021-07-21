import React from 'react';
import Section from '../../components/section';
import { Config } from '../../config';
import SocialList from './socialList';
import {
  Box,
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    user: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    userAvatar: {
      height: 150,
      width: 150,
    },
    userName: {
      fontSize: theme.typography.h5.fontSize,
      marginBottom: theme.spacing(1),
    },
    userTagline: {
      color: '#999',
      fontSize: theme.typography.h6.fontSize,
    },
  }),
);

type AboutSectionProps = {
  config: Config;
};

const AboutSection: React.VFC<AboutSectionProps> = (props: AboutSectionProps) => {
  const classes = useStyles();

  return (
    <Section>
      <Box className={classes.user}>
        <img
          className={classes.userAvatar}
          src='/images/profile.png'
          alt='Koki Sato'
        />
        <Typography className={classes.userName}>Koki Sato</Typography>
        <Typography className={classes.userTagline}>Developer</Typography>
      </Box>

      <SocialList items={props.config.socials}/>
    </Section>
  );
};

export default AboutSection;
