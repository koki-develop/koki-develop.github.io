import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { Config } from '@/types/config';
import { ConfigLoader } from '@/lib/configLoader';
import ProfileSection from '../../components/model/profile/ProfileSection';
import SkillsSection from './Skills';
import WorksSection from './Works';
import HistorySection from './History';
import ContactSection from './Contact';

export type HomeProps = {
  config: Config;
};

const Home: NextPage<HomeProps> = props => {
  const { config } = props;

  return (
    <Layout config={config}>
      <ProfileSection config={config} />
      <SkillsSection config={config} />
      <WorksSection config={config} />
      <HistorySection config={config} />
      <ContactSection config={config} />
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
