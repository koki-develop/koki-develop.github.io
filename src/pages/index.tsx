import React from 'react';
import { Layout } from '../layout';
import {
  SocialList,
  PortfolioCardList,
  Section,
  SkillCardList,
  HistoryList,
  User,
} from '../components';
import config from '../config';

const Home: React.VFC = () => {
  return (
    <Layout>
      <Section>
        <User name='Koki Sato' imgSrc='/images/profile.png'/>
        <SocialList items={config.socials}/>
      </Section>

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
