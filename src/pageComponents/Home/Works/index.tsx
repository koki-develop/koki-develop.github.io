import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import urlJoin from 'url-join';
import { Config } from '@/types/config';
import Section from '@/components/Section';
import ExternalLink from '@/components/ExternalLink';
import FadeSlideUp from '@/components/FadeSlideUp';
import SkillAvatarGroup from './SkillAvatarGroup';

const useStyles = makeStyles(theme =>
  createStyles({
    workCardHeader: {
      paddingBottom: 0,
    },
    workCardMedia: {
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
                        className={classes.workCardMedia}
                        image={urlJoin('/images/works', `${work.name}.png`)}
                      />
                    </ExternalLink>
                  </CardActionArea>
                )}
                <CardHeader
                  className={classes.workCardHeader}
                  title={(
                    <ExternalLink
                      className={classes.workCardTitleLink}
                      href={work.url}
                    >
                      {work.name}
                    </ExternalLink>
                  )}
                  titleTypographyProps={{ className: classes.workCardTitle }}
                />
                <CardContent className={classes.workCardContent}>
                  <SkillAvatarGroup skills={work.skills} />
                  <Typography className={classes.workDescription}>{work.description}</Typography>
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
