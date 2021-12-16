import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Socials } from '@/types/socials';
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

export type SocialListProps = {
  socials: Socials;
};

const SocialList: React.VFC<SocialListProps> = React.memo(props => {
  const classes = useStyles();

  const { socials } = props;

  return (
    <ul className={classes.socialList}>
      {Object.values(socials).map(social => (
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
  );
});

SocialList.displayName = 'SocialList';

export default SocialList;
