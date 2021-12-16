import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Config } from '@/types/config';
import ProfileBlock from '@/components/model/profile/ProfileBlock';
import Section from '@/components/utils/Section';
import ExternalLink from '@/components/utils/ExternalLink';

const useStyles = makeStyles(theme =>
  createStyles({
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
      <ProfileBlock config={config} />

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
