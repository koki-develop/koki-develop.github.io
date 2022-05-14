import { json } from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import classNames from 'classnames';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { config } from '@/config';
import HistoryTimeline from '@/components/model/history/HistoryTimeline';
import ProfileBlock from '@/components/model/profile/ProfileBlock';
import ProfileEmail from '@/components/model/profile/ProfileEmail';
import SkillCardList from '@/components/model/skill/SkillCardList';
import SocialList from '@/components/model/social/SocialList';
import WorkCardList from '@/components/model/work/WorkCardList';
import HomeTabs, { HomeTabValues } from '@/components/pages/Home/HomeTabs';
import Section from '@/components/utils/Section';
import type { HomeTabValue } from '@/components/pages/Home/HomeTabs';
import type { LoaderFunction } from '@remix-run/node';

type LoaderData = {
  tab: string | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const tab = url.searchParams.get('tab');

  return json<LoaderData>({ tab });
};

const HomePage: React.VFC = memo(() => {
  const { tab: defaultTab } = useLoaderData<LoaderData>();
  const navigate = useNavigate();
  const [tab, setTab] = useState<string | null>(defaultTab);

  const selectedTab = useMemo(() => {
    return (
      Object.values(HomeTabValues).find(v => v === tab) || HomeTabValues.about
    );
  }, [tab]);

  const handleSelectTab = useCallback(
    (tab: HomeTabValue) => {
      setTab(tab);
      navigate({ search: `tab=${tab}` }, { replace: true });
    },
    [navigate],
  );

  return (
    <div>
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

      <div>
        <Section title='Contact'>
          <ProfileEmail email={config.profile.email} />
        </Section>
      </div>
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
