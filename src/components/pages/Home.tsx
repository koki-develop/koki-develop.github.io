import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { Config } from '@/types/config';
import { ConfigLoader } from '@/lib/configLoader';
import ProfileBlock from '@/components/model/profile/ProfileBlock';
import ProfileEmail from '@/components/model/profile/ProfileEmail';
import SocialList from '@/components/model/social/SocialList';
import SkillCardList from '@/components/model/skill/SkillCardList';
import WorkCardList from '@/components/model/work/WorkCardList';
import HistoryTimeline from '@/components/model/history/HistoryTimeline';
import Section from '@/components/utils/Section';

export type HomeProps = {
  config: Config;
};

const Home: NextPage<HomeProps> = props => {
  const { config } = props;

  return (
    <Layout config={config}>
      <Section title='About' hideTitle>
        <ProfileBlock profile={config.profile} />
        <SocialList socials={config.socials} />
      </Section>

      <Section title='Skills'>
        <SkillCardList config={config} />
      </Section>

      <Section title='Works'>
        <WorkCardList config={config} />
      </Section>

      <Section title='History' disablePadding>
        <HistoryTimeline config={config} />
      </Section>

      <Section title='Contact'>
        <ProfileEmail config={config} />
      </Section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const config = ConfigLoader.load();

  return {
    props: {
      config,
    },
  };
};
