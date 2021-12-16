import React from 'react';
import { Config } from '@/types/config';
import ProfileBlock from '@/components/model/profile/ProfileBlock';
import SocialList from '@/components/model/social/SocialList';
import Section from '@/components/utils/Section';

export type AboutSectionProps = {
  config: Config;
};

const AboutSection: React.VFC<AboutSectionProps> = React.memo(props => {
  const { config } = props;

  return (
    <Section title='About' hideTitle>
      <ProfileBlock config={config} />
      <SocialList config={config} />
    </Section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
