import React from 'react';
import Section from '../../components/section';
import { Config } from '../../config';
import User from './user';
import SocialList from './socialList';

type AboutSectionProps = {
  config: Config;
};

const AboutSection: React.VFC<AboutSectionProps> = (props: AboutSectionProps) => {
  return (
    <Section>
      <User
        name='Koki Sato'
        imgSrc='/images/profile.png'
      />
      <SocialList items={props.config.socials}/>
    </Section>
  );
};

export default AboutSection;
