import React, { memo } from 'react';
import HomeTab from '@/components/pages/Home/HomeTab';

export const HomeTabValue = {
  about: 'about',
  works: 'works',
} as const;

export type HomeTabValue = typeof HomeTabValue[keyof typeof HomeTabValue];

export type HomeTabsProps = {
  value: HomeTabValue;
  onSelect: (value: HomeTabValue) => void;
};

const HomeTabs: React.VFC<HomeTabsProps> = memo(props => {
  const { value, onSelect: onChange } = props;

  return (
    <ul className='flex justify-center' style={{ marginBottom: '-1px' }}>
      {Object.values(HomeTabValue).map(tab => (
        <HomeTab
          key={tab}
          value={tab}
          active={value === tab}
          onSelect={onChange}
        />
      ))}
    </ul>
  );
});

HomeTabs.displayName = 'HomeTabs';

export default HomeTabs;
