import React from 'react';
import { Layout } from '../layout';
import AboutSection from '../sections/about';
import {
  PortfolioCardList,
  Section,
  SkillCardList,
  HistoryList,
} from '../components';
import config from '../config';

const Home: React.VFC = () => {
  return (
    <Layout>
      <AboutSection config={config}/>

      <Section title='Skill'>
        {config.skillGroups.map(group => (
          <SkillCardList key={group.name} name={group.name} skills={group.skills}/>
        ))}
      </Section>

      <Section title='Portfolio'>
        <PortfolioCardList portfolios={config.portfolios}/>
      </Section>

      <Section title='History'>
        <HistoryList histories={config.histories}/>
      </Section>
    </Layout>
  );
};

export default Home;
