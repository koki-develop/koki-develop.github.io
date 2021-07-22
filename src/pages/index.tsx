import React from 'react';
import Layout from '../layout';
import AboutSection from '../sections/about';
import SkillSection from '../sections/skill';
import PortfolioSection from '../sections/portfolio';
import HistorySection from '../sections/history';
import ContactSection from '../sections/contact';

const Home: React.VFC = () => {
  return (
    <Layout>
      <AboutSection/>
      <SkillSection/>
      <PortfolioSection/>
      <HistorySection/>
      <ContactSection/>
    </Layout>
  );
};

export default Home;
