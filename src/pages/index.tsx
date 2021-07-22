import React from 'react';
import { Layout } from '../layout';
import AboutSection from '../sections/about';
import SkillSection from '../sections/skill';
import PortfolioSection from '../sections/portfolio';
import {
  Section,
  HistoryList,
} from '../components';
import config from '../config';

const Home: React.VFC = () => {
  return (
    <Layout>
      <AboutSection config={config}/>

      <SkillSection config={config}/>

      <PortfolioSection config={config}/>

      <Section title='History'>
        <HistoryList histories={config.histories}/>
      </Section>
    </Layout>
  );
};

export default Home;
