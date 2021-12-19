import React from 'react';
import Section from '@/components/utils/Section';

export type PrivacyPolicyItemProps = {
  children: React.ReactNode;
  title: string;
};

const PrivacyPolicyItem: React.VFC<PrivacyPolicyItemProps> = React.memo(
  props => {
    const { children, title } = props;

    return <Section title={title}>{children}</Section>;
  },
);

PrivacyPolicyItem.displayName = 'PrivacyPolicyItem';

export default PrivacyPolicyItem;
