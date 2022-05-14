import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { memo, useCallback, useMemo } from 'react';
import HomeTabs, { HomeTabValue } from '@/components/pages/Home/HomeTabs';
import HistoryTimeline from '@/components/model/history/HistoryTimeline';
import ProfileBlock from '@/components/model/profile/ProfileBlock';
import ProfileEmail from '@/components/model/profile/ProfileEmail';
import SkillCardList from '@/components/model/skill/SkillCardList';
import SocialList from '@/components/model/social/SocialList';
import WorkCardList from '@/components/model/work/WorkCardList';
import Meta from '@/components/utils/Meta';
import Section from '@/components/utils/Section';
import { config } from '@/config';
import Layout from '@/components/Layout';

const HomePage: React.VFC = memo(() => {
  const router = useRouter();

  const selectedTab = useMemo(() => {
    return (
      Object.values(HomeTabValue).find(v => v === router.query.tab) ||
      HomeTabValue.about
    );
  }, [router.query.tab]);

  const handleSelectTab = useCallback(
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

      <HomeTabs value={selectedTab} onSelect={handleSelectTab} />

      <div
        className={classNames({ hidden: selectedTab !== HomeTabValue.about })}
      >
        <Section title='Skills'>
          <SkillCardList skillGroups={config.skillGroups} />
        </Section>
        <Section title='History'>
          <HistoryTimeline histories={config.histories} />
        </Section>
      </div>

      <div
        className={classNames({ hidden: selectedTab !== HomeTabValue.works })}
      >
        <Section title='Works'>
          <WorkCardList works={config.works} />
        </Section>
      </div>

      <div>
        <Section title='Contact'>
          <ProfileEmail email={config.profile.email} />
        </Section>
      </div>
    </Layout>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
