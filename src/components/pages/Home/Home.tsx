import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Layout from '@/components/Layout';
import ProfileBlock from '@/components/model/profile/ProfileBlock';
import ProfileEmail from '@/components/model/profile/ProfileEmail';
import SocialList from '@/components/model/social/SocialList';
import SkillCardList from '@/components/model/skill/SkillCardList';
import WorkCardList from '@/components/model/work/WorkCardList';
import HistoryTimeline from '@/components/model/history/HistoryTimeline';
import Section from '@/components/utils/Section';
import { config } from '@/config';

export const TabValue = {
  about: 'about',
  works: 'works',
  notes: 'notes',
} as const;

export type TabValue = typeof TabValue[keyof typeof TabValue];

const Home: React.VFC = React.memo(() => {
  const router = useRouter();

  const selectedTab = useMemo(() => {
    return (
      Object.values(TabValue).find(v => v === router.query.tab) ||
      TabValue.about
    );
  }, [router.query.tab]);

  const handleChangeTab = useCallback(
    (_event: React.SyntheticEvent, tab: TabValue) => {
      router.replace({ search: `tab=${tab}` });
    },
    [router],
  );

  return (
    <Layout>
      <ProfileBlock profile={config.profile} />
      <SocialList socials={config.socials} />

      <Tabs
        textColor='secondary'
        indicatorColor='secondary'
        value={selectedTab}
        onChange={handleChangeTab}
        centered
      >
        <Tab value={TabValue.about} label='About' />
        <Tab value={TabValue.works} label='Works' />
        <Tab
          disabled
          value={TabValue.notes}
          label={
            <span>
              Notes
              <br />
              (準備中)
            </span>
          }
        />
      </Tabs>

      <Box hidden={selectedTab !== TabValue.about}>
        <Section title='Skills'>
          <SkillCardList skillGroups={config.skillGroups} />
        </Section>
        <Section title='History' disablePadding>
          <HistoryTimeline histories={config.histories} />
        </Section>
      </Box>

      <Box hidden={selectedTab !== TabValue.works}>
        <Section title='Works'>
          <WorkCardList
            works={config.works}
            githubSocial={config.socials.github}
          />
        </Section>
      </Box>

      <Box>
        <Section title='Contact'>
          <ProfileEmail email={config.profile.email} />
        </Section>
      </Box>
    </Layout>
  );
});

Home.displayName = 'Home';

export default Home;
