import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import urlJoin from 'url-join';
import ExternalLink from '@/components/utils/ExternalLink';
import { Work } from '@/types/work';
import { Routes } from '@/routes';

export type WorkCardProps = {
  work: Work;
};

const WorkCard: React.VFC<WorkCardProps> = React.memo(props => {
  const { work } = props;

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
        sx={{ pb: 1 }}
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
          href={Routes.repository(work.repository)}
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
