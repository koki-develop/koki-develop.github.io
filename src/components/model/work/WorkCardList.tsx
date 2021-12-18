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
import urlJoin from 'url-join';
import { Social } from '@/types/socials';
import ExternalLink from '@/components/utils/ExternalLink';
import FadeSlideUp from '@/components/utils/FadeSlideUp';
import SkillAvatarGroup from '@/components/model/skill/SkillAvatarGroup';
import { Work } from '@/types/work';

export type WorkCardListProps = {
  githubSocial: Social;
  works: Work[];
};

const WorkCardList: React.VFC<WorkCardListProps> = React.memo(props => {
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
                      image={urlJoin('/images/works', `${work.name}.png`)}
                      sx={{ height: { xs: 150, sm: 230, md: 280, lg: 300 } }}
                    />
                  </ExternalLink>
                </CardActionArea>
              )}
              <CardHeader
                title={
                  <ExternalLink
                    href={work.url}
                    sx={{
                      color: theme => theme.palette.primary.contrastText,
                      fontWeight: 'bold',
                      '&:hover': { opacity: 1 },
                    }}
                  >
                    {work.name}
                  </ExternalLink>
                }
                sx={{ pb: 0 }}
              />
              <CardContent sx={{ pt: 0 }}>
                <SkillAvatarGroup skills={work.skills} />
                <Typography
                  sx={{
                    fontSize: theme => theme.typography.body2.fontSize,
                    mb: 1,
                  }}
                >
                  {work.description}
                </Typography>
                <ExternalLink
                  href={urlJoin(
                    'https://github.com',
                    githubSocial.username,
                    work.repository,
                  )}
                  sx={{ color: theme => theme.palette.primary.contrastText }}
                >
                  View on GitHub
                </ExternalLink>
              </CardContent>
            </Card>
          </FadeSlideUp>
        </Grid>
      ))}
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <FadeSlideUp>
          <Button
            href={`${githubSocial.url}?tab=repositories&type=source`}
            target='_blank'
            rel='noreferrer noopener'
            size='large'
            endIcon={<KeyboardArrowRightIcon />}
            sx={{ '&:hover': { opacity: 1 } }}
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
