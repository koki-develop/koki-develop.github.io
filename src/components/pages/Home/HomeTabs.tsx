import React, { memo } from 'react';
import HomeTab from '@/components/pages/Home/HomeTab';

export const HomeTabValues = {
  about: 'about',
  works: 'works',
  notes: 'notes',
} as const;

export type HomeTabValue = typeof HomeTabValues[keyof typeof HomeTabValues];

export type HomeTabsProps = {
  value: HomeTabValue;
  onSelect: (value: HomeTabValue) => void;
};

const HomeTabs: React.VFC<HomeTabsProps> = memo(props => {
  const { value, onSelect: onChange } = props;

  return (
    <ul className='flex justify-center' style={{ marginBottom: '-1px' }}>
      {Object.values(HomeTabValues).map(tab => (
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
