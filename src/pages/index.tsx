import React from 'react';
import Layout from '../layout';
import AboutSection from '../sections/about';
import SkillSection from '../sections/skill';
import PortfolioSection from '../sections/portfolio';
import HistorySection from '../sections/history';
import config from '../config';

const Home: React.VFC = () => {
  return (
    <Layout>
      <AboutSection config={config}/>

      <SkillSection config={config}/>

      <PortfolioSection config={config}/>

      <HistorySection config={config}/>
    </Layout>
  );
};

export default Home;
