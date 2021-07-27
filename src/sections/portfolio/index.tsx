import React from 'react';
import config from '../../config';
import Section from '../../components/section';
import ExternalLink from '../../components/externalLink';
import FadeSlideUp from '../../components/fadeSlideUp';
import SkillAvatarGroup from './skillAvatarGroup';
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

const PortfolioSection: React.VFC = React.memo(() => {
  const classes = useStyles();

  return (
    <Section title='Portfolio'>
      <Grid
        container
        spacing={4}
      >
        {config.portfolios.map(portfolio => (
          <Grid
            key={portfolio.title}
            item
            xs={12}
          >
            <FadeSlideUp>
              <Card raised>
                {portfolio.imgSrc && portfolio.url && (
                  <CardActionArea>
                    <ExternalLink href={portfolio.url}>
                      <CardMedia
                        className={classes.portfolioCardMedia}
                        image={portfolio.imgSrc}
                      />
                    </ExternalLink>
                  </CardActionArea>
                )}
                <CardHeader
                  className={classes.portfolioCardHeader}
                  title={(
                    <ExternalLink
                      className={classes.portfolioCardTitleLink}
                      href={portfolio.url}
                    >
                      {portfolio.title}
                    </ExternalLink>
                  )}
                  titleTypographyProps={{ className: classes.portfolioCardTitle }}
                />
                <CardContent className={classes.portfolioCardContent}>
                  <SkillAvatarGroup skills={portfolio.skills}/>
                  <Typography className={classes.portfolioDescription}>{portfolio.description}</Typography>
                  <ExternalLink href={portfolio.githubUrl}>
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

PortfolioSection.displayName = 'PortfolioSection';

export default PortfolioSection;
