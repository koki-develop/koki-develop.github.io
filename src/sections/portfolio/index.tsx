import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import urlJoin from 'url-join';
import { Config } from '@/types/config';
import Section from '@/components/section';
import ExternalLink from '@/components/externalLink';
import FadeSlideUp from '@/components/fadeSlideUp';
import SkillAvatarGroup from './skillAvatarGroup';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    portfolioCardHeader: {
      paddingBottom: 0,
    },
    portfolioCardMedia: {
      height: 300,
      [theme.breakpoints.down('md')]: {
        height: 280,
      },
      [theme.breakpoints.down('sm')]: {
        height: 230,
      },
      [theme.breakpoints.down('xs')]: {
        height: 150,
      },
    },
    portfolioCardTitle: {
      fontWeight: 'bold',
    },
    portfolioCardTitleLink: {
      '&:hover': {
        opacity: 1,
      },
    },
    portfolioCardContent: {
      paddingTop: 0,
    },
    portfolioDescription: {
      fontSize: theme.typography.body2.fontSize,
      marginBottom: theme.spacing(1),
    },
  }),
);

export type WorksSectionProps = {
  config: Config;
};

const WorksSection: React.VFC<WorksSectionProps> = React.memo(props => {
  const classes = useStyles();

  const { config } = props;

  return (
    <Section title='Works'>
      <Grid
        container
        spacing={4}
      >
        {config.works.map(work => (
          <Grid
            key={work.name}
            item
            xs={12}
          >
            <FadeSlideUp>
              <Card raised>
                {work.hasImage && (
                  <CardActionArea>
                    <ExternalLink href={work.url}>
                      <CardMedia
                        className={classes.portfolioCardMedia}
                        image={urlJoin('/images/works', work.name)}
                      />
                    </ExternalLink>
                  </CardActionArea>
                )}
                <CardHeader
                  className={classes.portfolioCardHeader}
                  title={(
                    <ExternalLink
                      className={classes.portfolioCardTitleLink}
                      href={work.url}
                    >
                      {work.name}
                    </ExternalLink>
                  )}
                  titleTypographyProps={{ className: classes.portfolioCardTitle }}
                />
                <CardContent className={classes.portfolioCardContent}>
                  <SkillAvatarGroup skills={work.skills} />
                  <Typography className={classes.portfolioDescription}>{work.description}</Typography>
                  <ExternalLink href={urlJoin('https://github.com', config.socials.github.username, work.repository)}>
                    View on GitHub
                  </ExternalLink>
                </CardContent>
              </Card>
            </FadeSlideUp>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
});

WorksSection.displayName = 'WorksSection';

export default WorksSection;
