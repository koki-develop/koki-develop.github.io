import Grid from '@mui/material/Grid';
import React from 'react';
import WorkCard from '@/components/model/work/WorkCard';
import { Work } from '@/types/work';

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
    </Grid>
  );
});

WorkCardList.displayName = 'WorkCardList';

export default WorkCardList;
