import classNames from 'classnames';
import React, { memo, useCallback, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { config } from '@/config';
import HistoryTimeline from '@/components/model/history/HistoryTimeline';
import ProfileBlock from '@/components/model/profile/ProfileBlock';
import ProfileEmail from '@/components/model/profile/ProfileEmail';
import SkillCardList from '@/components/model/skill/SkillCardList';
import SocialList from '@/components/model/social/SocialList';
import WorkCardList from '@/components/model/work/WorkCardList';
import HomeTabs, { HomeTabValues } from '@/components/pages/Home/HomeTabs';
import Meta from '@/components/utils/Meta';
import Section from '@/components/utils/Section';
import type { HomeTabValue } from '@/components/pages/Home/HomeTabs';

const HomePage: React.VFC = memo(() => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const selectedTab = useMemo(() => {
    return (
      Object.values(HomeTabValues).find(v => v === searchParams.get('tab')) ||
      HomeTabValues.about
    );
  }, [searchParams]);

  const handleSelectTab = useCallback(
    (tab: HomeTabValue) => {
      const search = tab === 'about' ? '' : `tab=${tab}`;
      navigate({ search }, { replace: true });
    },
    [navigate],
  );

  return (
    <div>
      <Meta />

      <ProfileBlock profile={config.profile} />
      <SocialList socials={config.socials} />

      <HomeTabs value={selectedTab} onSelect={handleSelectTab} />

      <div
        className={classNames({ hidden: selectedTab !== HomeTabValues.about })}
      >
        <Section title='Skills'>
          <SkillCardList skillGroups={config.skillGroups} />
        </Section>
        <Section title='History'>
          <HistoryTimeline histories={config.histories} />
        </Section>
      </div>

      <div
        className={classNames({ hidden: selectedTab !== HomeTabValues.works })}
      >
        <Section title='Works'>
          <WorkCardList works={config.works} />
        </Section>
      </div>

      <div
        className={classNames({ hidden: selectedTab !== HomeTabValues.notes })}
      >
        <Section title='Notes'>hello world</Section>
      </div>

      <div>
        <Section title='Contact'>
          <SocialList socials={config.socials} />
          <ProfileEmail email={config.profile.email} />
        </Section>
      </div>
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
