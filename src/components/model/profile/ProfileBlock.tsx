import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Config } from '@/types/config';

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

export type ProfileBlockProps = {
  config: Config;
};

const ProfileBlock: React.VFC<ProfileBlockProps> = React.memo(props => {
  const classes = useStyles();

  const { config } = props;

  return (
    <div>
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
    </div>
  );
});

ProfileBlock.displayName = 'ProfileBlock';

export default ProfileBlock;
