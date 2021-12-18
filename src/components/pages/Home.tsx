import React from 'react';
import { NextPage } from 'next';
import Layout from '@/components/Layout';
import ProfileBlock from '@/components/model/profile/ProfileBlock';
import ProfileEmail from '@/components/model/profile/ProfileEmail';
import SocialList from '@/components/model/social/SocialList';
import SkillCardList from '@/components/model/skill/SkillCardList';
import WorkCardList from '@/components/model/work/WorkCardList';
import HistoryTimeline from '@/components/model/history/HistoryTimeline';
import Section from '@/components/utils/Section';
import { config } from '@/config';

const Home: NextPage = () => {
  return (
    <Layout config={config}>
      <Section title='About' hideTitle>
        <ProfileBlock profile={config.profile} />
        <SocialList socials={config.socials} />
      </Section>

      <Section title='Skills'>
        <SkillCardList skillGroups={config.skillGroups} />
      </Section>

      <Section title='Works'>
        <WorkCardList
          works={config.works}
          githubSocial={config.socials.github}
        />
      </Section>

      <Section title='History' disablePadding>
        <HistoryTimeline histories={config.histories} />
      </Section>

      <Section title='Contact'>
        <ProfileEmail email={config.profile.email} />
      </Section>
    </Layout>
  );
};

export default Home;
