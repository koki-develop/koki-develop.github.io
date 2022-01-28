import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import urlJoin from 'url-join';
import { Social } from '@/types/socials';
import ExternalLink from '@/components/utils/ExternalLink';
import { Work } from '@/types/work';

export type WorkCardProps = {
  githubSocial: Social;
  work: Work;
};

const WorkCard: React.VFC<WorkCardProps> = React.memo(props => {
  const { work, githubSocial } = props;

  return (
    <Card raised>
      {work.hasImage && (
        <CardActionArea>
          <ExternalLink href={work.url}>
            <CardMedia
              image={urlJoin('/images/works', `${work.name}.png`)}
              sx={{
                backgroundPosition: 'center',
                height: { xs: 140 },
              }}
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
            }}
          >
            {work.name}
          </ExternalLink>
        }
        sx={{ pb: 0 }}
      />
      <CardContent sx={{ pt: 0 }}>
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
  );
});

WorkCard.displayName = 'WorkCard';

export default WorkCard;
