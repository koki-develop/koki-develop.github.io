import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Social } from '@/types/socials';
import FadeSlideUp from '@/components/utils/FadeSlideUp';
import WorkCard from '@/components/model/work/WorkCard';
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
            <WorkCard work={work} githubSocial={githubSocial} />
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
