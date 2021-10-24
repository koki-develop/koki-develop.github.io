import React from 'react';
import {
  NextPage,
  GetStaticProps,
} from 'next';
import Layout from '@/layout';
import AboutSection from '@/sections/about';
import SkillsSection from '@/sections/skill';
import WorksSection from '@/sections/portfolio';
import HistorySection from '@/sections/history';
import ContactSection from '@/sections/contact';
import { Config } from '@/types/config';
import { ConfigLoader } from '@/lib/configLoader';

export type HomeProps = {
  config: Config;
};

const Home: NextPage<HomeProps> = props => {
  const { config } = props;

  return (
    <Layout config={config}>
      <AboutSection config={config} />
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
