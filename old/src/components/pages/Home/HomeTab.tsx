import classNames from 'classnames';
import React, { memo, useCallback } from 'react';
import { HomeTabValue } from '@/components/pages/Home/HomeTabs';

export type HomeTabProps = {
  value: HomeTabValue;
  active: boolean;
  onSelect: (value: HomeTabValue) => void;
};

const valueToLabel = (value: HomeTabValue) => {
  switch (value) {
    case HomeTabValue.about:
      return 'About';
    case HomeTabValue.works:
      return 'Works';
  }
};

const HomeTab: React.VFC<HomeTabProps> = memo(props => {
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
