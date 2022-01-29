import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WorkCard from '@/components/model/work/WorkCard';
import { Work } from '@/types/work';
import { Routes } from '@/routes';

export type WorkCardListProps = {
  works: Work[];
};

const WorkCardList: React.VFC<WorkCardListProps> = React.memo(props => {
  const { works } = props;

  return (
    <Grid container spacing={2}>
      {works.map(work => (
        <Grid key={work.name} item xs={12} sm={6}>
          <WorkCard work={work} />
        </Grid>
      ))}
      <Grid
        item
        xs={12}
        sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
      >
        <Button
          href={Routes.repositories()}
          target='_blank'
          rel='noreferrer noopener'
          size='large'
          endIcon={<KeyboardArrowRightIcon />}
        >
          More
        </Button>
      </Grid>
    </Grid>
  );
});

WorkCardList.displayName = 'WorkCardList';

export default WorkCardList;
