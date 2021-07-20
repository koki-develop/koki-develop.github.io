import React from 'react';
import { Layout } from '../layout';
import { SocialList, PortfolioCardList, Section, SkillCardList, HistoryList, User } from '../components';
import { Divider } from '@material-ui/core';
import config from '../config';

const Home: React.VFC = () => {
  return (
    <Layout>
      <Section>
        <User name='Koki Sato' imgSrc='/images/profile.png'/>
        <SocialList items={config.socials}/>
      </Section>

      <Divider id='skill'/>

      <Section title='Skill'>
        {config.skillGroups.map(group => (
          <SkillCardList key={group.name} name={group.name} skills={group.skills}/>
        ))}
      </Section>

      <Divider id='portfolios'/>

      <Section title='Portfolios'>
        <PortfolioCardList portfolios={config.portfolios}/>
      </Section>

      <Divider id='history'/>

      <Section title='History'>
        <HistoryList histories={config.histories}/>
      </Section>
    </Layout>
  );
};

export default Home;
