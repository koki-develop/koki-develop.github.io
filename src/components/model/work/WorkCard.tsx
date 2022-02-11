import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import urlJoin from 'url-join';
import Link from '@/components/utils/Link';
import { Work } from '@/types/work';

export type WorkCardProps = {
  work: Work;
};

const WorkCard: React.VFC<WorkCardProps> = React.memo(props => {
  const { work } = props;

  return (
    <Card raised>
      {work.hasImage && (
        <CardActionArea>
          <Link external href={work.url}>
            <CardMedia
              image={urlJoin('/images/works', `${work.name}.png`)}
              sx={{
                backgroundPosition: 'center',
                height: { xs: 140 },
              }}
            />
          </Link>
        </CardActionArea>
      )}
      <CardHeader
        title={
          <Link
            external
            href={work.url}
            sx={{
              color: theme => theme.palette.primary.contrastText,
              fontWeight: 'bold',
            }}
          >
            {work.name}
          </Link>
        }
        titleTypographyProps={{
          component: 'h2',
        }}
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
        <Link
          external
          href={work.repositoryUrl}
          sx={{ color: theme => theme.palette.primary.contrastText }}
        >
          View on GitHub
        </Link>
      </CardContent>
    </Card>
  );
});

WorkCard.displayName = 'WorkCard';

export default WorkCard;
