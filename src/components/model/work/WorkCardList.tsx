import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import urlJoin from 'url-join';
import { Social } from '@/types/socials';
import ExternalLink from '@/components/utils/ExternalLink';
import FadeSlideUp from '@/components/utils/FadeSlideUp';
import SkillAvatarGroup from '@/components/model/skill/SkillAvatarGroup';
import { Work } from '@/types/work';

const useStyles = makeStyles(theme =>
  createStyles({
    workCardHeader: {
      paddingBottom: 0,
    },
    workCardMedia: {
      height: 300,
      [theme.breakpoints.down('lg')]: {
        height: 280,
      },
      [theme.breakpoints.down('md')]: {
        height: 230,
      },
      [theme.breakpoints.down('sm')]: {
        height: 150,
      },
    },
    workCardTitle: {
      fontWeight: 'bold',
    },
    workCardTitleLink: {
      '&:hover': {
        opacity: 1,
      },
    },
    workCardContent: {
      paddingTop: 0,
    },
    workDescription: {
      fontSize: theme.typography.body2.fontSize,
      marginBottom: theme.spacing(1),
    },
    moreButtonContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    moreButton: {
      '&:hover': {
        opacity: 1,
      },
    },
  }),
);

export type WorkCardListProps = {
  githubSocial: Social;
  works: Work[];
};

const WorkCardList: React.VFC<WorkCardListProps> = React.memo(props => {
  const classes = useStyles();

  const { works, githubSocial } = props;

  return (
    <Grid container spacing={4}>
      {works.map(work => (
        <Grid key={work.name} item xs={12}>
          <FadeSlideUp>
            <Card raised>
              {work.hasImage && (
                <CardActionArea>
                  <ExternalLink href={work.url}>
                    <CardMedia
                      className={classes.workCardMedia}
                      image={urlJoin('/images/works', `${work.name}.png`)}
                    />
                  </ExternalLink>
                </CardActionArea>
              )}
              <CardHeader
                className={classes.workCardHeader}
                title={
                  <ExternalLink
                    className={classes.workCardTitleLink}
                    href={work.url}
                  >
                    {work.name}
                  </ExternalLink>
                }
                titleTypographyProps={{ className: classes.workCardTitle }}
              />
              <CardContent className={classes.workCardContent}>
                <SkillAvatarGroup skills={work.skills} />
                <Typography className={classes.workDescription}>
                  {work.description}
                </Typography>
                <ExternalLink
                  href={urlJoin(
                    'https://github.com',
                    githubSocial.username,
                    work.repository,
                  )}
                >
                  View on GitHub
                </ExternalLink>
              </CardContent>
            </Card>
          </FadeSlideUp>
        </Grid>
      ))}
      <Grid className={classes.moreButtonContainer} item xs={12}>
        <FadeSlideUp>
          <Button
            className={classes.moreButton}
            href={`${githubSocial.url}?tab=repositories&type=source`}
            target='_blank'
            rel='noreferrer noopener'
            size='large'
            endIcon={<KeyboardArrowRightIcon />}
          >
            More
          </Button>
        </FadeSlideUp>
      </Grid>
    </Grid>
  );
});

WorkCardList.displayName = 'WorkCardList';

export default WorkCardList;
