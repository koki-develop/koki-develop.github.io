import React from 'react';
import config from '../../config';
import Section from '../../components/section';
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
      marginBottom: theme.spacing(1),
    },
    userAvatar: {
      height: 150,
      width: 150,
    },
    userName: {
      fontSize: theme.typography.h5.fontSize,
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
    descriptionContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    description: {
      textAlign: 'center',
      whiteSpace: 'pre',
    },
  }),
);

const AboutSection: React.VFC = React.memo(() => {
  const classes = useStyles();

  return (
    <Section
      title='About'
      hideTitle
    >
      <Box className={classes.user}>
        <img
          className={classes.userAvatar}
          src='/images/profile.png'
          alt={config.name}
        />
        <Typography className={classes.userName}>{config.name}</Typography>
        <Typography className={classes.userTagline}>Developer</Typography>
      </Box>

      <Box className={classes.descriptionContainer}>
        <Typography className={classes.description}>
          {config.description}
        </Typography>
      </Box>

      <ul className={classes.socialList}>
        {config.socials.map(social => (
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
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
