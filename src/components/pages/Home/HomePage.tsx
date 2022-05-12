import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo } from 'react';
import HomeTabs, { HomeTabValue } from '@/components/pages/Home/HomeTabs';
import HistoryTimeline from '@/components/model/history/HistoryTimeline';
import ProfileBlock from '@/components/model/profile/ProfileBlock';
import ProfileEmail from '@/components/model/profile/ProfileEmail';
import SkillCardList from '@/components/model/skill/SkillCardList';
import SocialList from '@/components/model/social/SocialList';
import WorkCardList from '@/components/model/work/WorkCardList';
import LinkButton from '@/components/utils/LinkButton';
import Meta from '@/components/utils/Meta';
import Section from '@/components/utils/Section';
import { Routes } from '@/routes';
import { config } from '@/config';
import Layout from '@/components/Layout';

const HomePage: React.VFC = React.memo(() => {
  const router = useRouter();

  const selectedTab = useMemo(() => {
    return (
      Object.values(HomeTabValue).find(v => v === router.query.tab) ||
      HomeTabValue.about
    );
  }, [router.query.tab]);

  const handleChangeTab = useCallback(
    (tab: HomeTabValue) => {
      router.replace({ search: `tab=${tab}` }, undefined, { scroll: false });
    },
    [router],
  );

  return (
    <Layout>
      <Meta description={config.profile.description} />
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <LinkButton
              href={Routes.repositories()}
              external
              size='large'
              endIcon={<KeyboardArrowRightIcon />}
            >
              More
            </LinkButton>
          </Box>
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
