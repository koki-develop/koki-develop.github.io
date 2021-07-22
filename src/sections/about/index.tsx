import React from 'react';
import { Config } from '../../config';
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
      whiteSpace: 'nowrap',
    },
  }),
);

type AboutSectionProps = {
  config: Config;
};

const AboutSection: React.VFC<AboutSectionProps> = (props: AboutSectionProps) => {
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
          alt='Koki Sato'
        />
        <Typography className={classes.userName}>Koki Sato</Typography>
        <Typography className={classes.userTagline}>Developer</Typography>
      </Box>

      <Box className={classes.descriptionContainer}>
        <Typography className={classes.description}>
          埼玉県在住の23歳。のんびり生きています。
        </Typography>
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
