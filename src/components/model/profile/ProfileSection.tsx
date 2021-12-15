import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Config } from '@/types/config';
import Section from '@/components/utils/Section';
import ExternalLink from '@/components/utils/ExternalLink';

const useStyles = makeStyles(theme =>
  createStyles({
    profile: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: theme.spacing(1),
    },
    avatar: {
      height: 150,
      width: 150,
    },
    name: {
      fontSize: theme.typography.h5.fontSize,
    },
    tag: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.h6.fontSize,
    },
    socialList: {
      display: 'flex',
      justifyContent: 'center',
    },
    socialListItem: {
      margin: theme.spacing(2),
    },
    socialIcon: {
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

  return (
    <Section title='About' hideTitle>
      <div className={classes.profile}>
        <div>
          <img
            className={classes.avatar}
            src='/images/profile.png'
            alt={config.profile.name}
          />
        </div>
        <Typography className={classes.name}>{config.profile.name}</Typography>
        <Typography className={classes.tag}>Developer</Typography>
      </div>

      <div className={classes.descriptionContainer}>
        <Typography className={classes.description}>
          {config.profile.description}
        </Typography>
      </div>

      <ul className={classes.socialList}>
        {Object.values(config.socials).map(social => (
          <li key={social.name} className={classes.socialListItem}>
            <ExternalLink href={social.url}>
              <img
                className={classes.socialIcon}
                src={social.imageUrl}
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
