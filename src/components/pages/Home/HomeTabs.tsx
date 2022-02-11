import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useCallback } from 'react';

export const HomeTabValue = {
  about: 'about',
  works: 'works',
  notes: 'notes',
} as const;

export type HomeTabValue = typeof HomeTabValue[keyof typeof HomeTabValue];

export type HomeTabsProps = {
  value: HomeTabValue;
  onChange: (value: HomeTabValue) => void;
};

const valueToLabel = (value: HomeTabValue) => {
  switch (value) {
    case HomeTabValue.about:
      return 'About';
    case HomeTabValue.works:
      return 'Works';
    case HomeTabValue.notes:
      return 'Notes';
  }
};

const HomeTabs: React.VFC<HomeTabsProps> = React.memo(props => {
  const { value, onChange } = props;

  const handleChangeTab = useCallback(
    (_event: React.SyntheticEvent, tab: HomeTabValue) => {
      onChange(tab);
    },
    [onChange],
  );

  return (
    <Tabs
      textColor='secondary'
      indicatorColor='secondary'
      value={value}
      onChange={handleChangeTab}
      centered
    >
      {Object.values(HomeTabValue).map(tab => (
        <Tab
          key={tab}
          value={tab}
          label={valueToLabel(tab)}
          sx={{ fontWeight: value === tab ? 'bold' : null }}
        />
      ))}
    </Tabs>
  );
});

HomeTabs.displayName = 'HomeTabs';

export default HomeTabs;
