import React from 'react';
import { Config } from '../../config';
import Section from '../../components/section';
import { HistoryList } from '../../components';

type HistorySectionProps = {
  config: Config;
};

const HistorySection: React.VFC<HistorySectionProps> = (props: HistorySectionProps) => {
  return (
    <Section title='History'>
      <HistoryList histories={props.config.histories}/>
    </Section>
  );
};

export default HistorySection;
