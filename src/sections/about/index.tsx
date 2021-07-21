import React from 'react';
import Section from '../../components/section';
import { Config } from '../../config';
import {
  Box,
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import ExternalLink from '../../components/externalLink';

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
    socialList: {
      display: 'flex',
      justifyContent: 'center',
    },
    socialListItem: {
      margin: theme.spacing(2),
    },
    socialListItemImg: {
      height: 40,
      width: 40,
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

      <ul className={classes.socialList}>
        {props.config.socials.map(social => (
          <li key={social.name} className={classes.socialListItem}>
            <ExternalLink href={social.href}>
              <img
                className={classes.socialListItemImg}
                src={social.imgSrc}
                alt={social.name}
              />
            </ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default AboutSection;
