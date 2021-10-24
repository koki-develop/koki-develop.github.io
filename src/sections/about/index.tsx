import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import urlJoin from 'url-join';
import { Config } from '@/types/config';
import Section from '@/components/section';
import ExternalLink from '@/components/ExternalLink';

const useStyles = makeStyles(theme =>
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

export type AboutSectionProps = {
  config: Config;
};

const AboutSection: React.VFC<AboutSectionProps> = React.memo(props => {
  const classes = useStyles();

  const { config } = props;
  const socials = [
    { name: 'GitHub', url: urlJoin('https://github.com', config.socials.github.username) },
    { name: 'Twitter', url: urlJoin('https://twitter.com', config.socials.twitter.username) },
    { name: 'Zenn', url: urlJoin('https://zenn.dev', config.socials.zenn.username) },
  ];

  return (
    <Section
      title='About'
      hideTitle
    >
      <Box className={classes.user}>
        <img
          className={classes.userAvatar}
          src='/images/profile.png'
          alt={config.profile.name}
        />
        <Typography className={classes.userName}>{config.profile.name}</Typography>
        <Typography className={classes.userTagline}>Developer</Typography>
      </Box>

      <Box className={classes.descriptionContainer}>
        <Typography className={classes.description}>
          {config.profile.description}
        </Typography>
      </Box>

      <ul className={classes.socialList}>
        {socials.map(social => (
          <li key={social.name} className={classes.socialListItem}>
            <ExternalLink href={social.url}>
              <img
                className={classes.socialListItemImg}
                src={urlJoin('/images/socials', social.name)}
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
