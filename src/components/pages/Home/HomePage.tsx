import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import HomeTabs, { HomeTabValue } from '@/components/pages/Home/HomeTabs';
import Layout from '@/components/Layout';
import NoteCardList from '@/components/model/note/NoteCardList';
import ProfileBlock from '@/components/model/profile/ProfileBlock';
import ProfileEmail from '@/components/model/profile/ProfileEmail';
import SocialList from '@/components/model/social/SocialList';
import SkillCardList from '@/components/model/skill/SkillCardList';
import WorkCardList from '@/components/model/work/WorkCardList';
import HistoryTimeline from '@/components/model/history/HistoryTimeline';
import Section from '@/components/utils/Section';
import Meta from '@/components/utils/Meta';
import * as qs from 'query-string';
import { config } from '@/config';
import { Note } from '@/types/note';

export type HomePageProps = {
  latestNotes: Note[];
};

const HomePage: React.VFC<HomePageProps> = React.memo(props => {
  const { latestNotes } = props;

  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState<HomeTabValue>(() => {
    const querystring = router.asPath.replace(router.pathname, '');
    const query = qs.parse(querystring);

    switch (query.tab) {
      case HomeTabValue.works:
      case HomeTabValue.notes:
        return query.tab;
      default:
        return HomeTabValue.about;
    }
  });

  const handleChangeTab = useCallback(
    (tab: HomeTabValue) => {
      router.replace(
        { search: tab === HomeTabValue.about ? '' : `tab=${tab}` },
        undefined,
        { scroll: false },
      );
      setSelectedTab(tab);
    },
    [router],
  );

  return (
    <Layout>
      <Meta />
      <ProfileBlock profile={config.profile} />
      <SocialList socials={config.socials} />

      <HomeTabs value={selectedTab} onChange={handleChangeTab} />

      <Box hidden={selectedTab !== HomeTabValue.about}>
        <Section title='Skills'>
          <SkillCardList skillGroups={config.skillGroups} />
        </Section>
        <Section title='History'>
          <HistoryTimeline histories={config.histories} />
        </Section>
      </Box>

      <Box hidden={selectedTab !== HomeTabValue.works}>
        <Section title='Works'>
          <WorkCardList works={config.works} />
        </Section>
      </Box>

      <Box hidden={selectedTab !== HomeTabValue.notes}>
        <Section title='Notes'>
          <NoteCardList notes={latestNotes} />
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

HomePage.displayName = 'HomePage';

export default HomePage;
