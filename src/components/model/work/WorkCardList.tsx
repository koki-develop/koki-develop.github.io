import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Social } from '@/types/socials';
import WorkCard from '@/components/model/work/WorkCard';
import { Work } from '@/types/work';

export type WorkCardListProps = {
  githubSocial: Social;
  works: Work[];
};

const WorkCardList: React.VFC<WorkCardListProps> = React.memo(props => {
  const { works, githubSocial } = props;

  return (
    <Grid container spacing={2}>
      {works.map(work => (
        <Grid key={work.name} item xs={12} sm={6}>
          <WorkCard work={work} githubSocial={githubSocial} />
        </Grid>
      ))}
      <Grid
        item
        xs={12}
        sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
      >
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
      </Grid>
    </Grid>
  );
});

WorkCardList.displayName = 'WorkCardList';

export default WorkCardList;
