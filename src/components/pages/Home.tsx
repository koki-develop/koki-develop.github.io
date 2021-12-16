import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { Config } from '@/types/config';
import { ConfigLoader } from '@/lib/configLoader';
import ProfileBlock from '@/components/model/profile/ProfileBlock';
import ProfileEmail from '@/components/model/profile/ProfileEmail';
import SocialList from '@/components/model/social/SocialList';
import SkillCardList from '@/components/model/skill/SkillCardList';
import SkillsSection from '@/components/model/skill/SkillsSection';
import WorksSection from '@/components/model/work/WorksSection';
import HistorySection from '@/components/model/history/HistorySection';
import ProfileContactSection from '@/components/model/profile/ProfileEmail';
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

      <Section title='Contact'>
        <ProfileEmail config={config} />
      </Section>

      <Section title='Skills'>
        <SkillCardList config={config} />
      </Section>

      <WorksSection config={config} />
      <HistorySection config={config} />
      <ProfileContactSection config={config} />
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
