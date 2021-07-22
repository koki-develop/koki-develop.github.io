import React from 'react';
import { Config } from '../../config';
import Section from '../../components/section';
import ExternalLink from '../../components/externalLink';
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
    portfolioCardMedia: {
      height: 300,
      [theme.breakpoints.down('lg')]: {
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
    portfolioCardContent: {
      paddingTop: 0,
    },
    portfolioDescription: {
      fontSize: theme.typography.body2.fontSize,
      marginBottom: theme.spacing(1),
    },
  }),
);

type PortfolioSectionProps = {
  config: Config;
};

const PortfolioSection: React.VFC<PortfolioSectionProps> = (props: PortfolioSectionProps) => {
  const classes = useStyles();

  return (
    <Section title='Portfolio'>
      <Grid
        container
        spacing={4}
      >
        {props.config.portfolios.map(portfolio => (
          <Grid
            key={portfolio.title}
            item
            xs={12}
          >
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
                title={portfolio.title}
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
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default PortfolioSection;
