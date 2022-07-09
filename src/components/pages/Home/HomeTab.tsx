import classNames from 'classnames';
import React, { memo, useCallback } from 'react';
import { HomeTabValues } from '@/components/pages/Home/HomeTabs';
import type { HomeTabValue } from '@/components/pages/Home/HomeTabs';

export type HomeTabProps = {
  value: HomeTabValue;
  active: boolean;
  onSelect: (value: HomeTabValue) => void;
};

const valueToLabel = (value: HomeTabValue) => {
  switch (value) {
    case HomeTabValues.about:
      return 'About';
    case HomeTabValues.works:
      return 'Works';
    case HomeTabValues.notes:
      return 'Notes';
  }
};

const HomeTab: React.FC<HomeTabProps> = memo(props => {
  const { value, active, onSelect } = props;

  const handleSelect = useCallback(() => {
    onSelect(value);
  }, [onSelect, value]);

  return (
    <li
      className={classNames(
        'mx-1 cursor-pointer px-4 py-2 text-sm transition',
        {
          'border-b-2 border-black font-bold': active,
          'border-b border-transparent text-gray-500 hover:border-gray-500':
            !active,
        },
      )}
      onClick={handleSelect}
    >
      {valueToLabel(value)}
    </li>
  );
});

HomeTab.displayName = 'HomeTab';

export default HomeTab;
