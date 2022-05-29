import React, { memo, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

export type MetaProps = {
  title?: string;
};

const Meta: React.FC<MetaProps> = memo(props => {
  const { title } = props;

  const fullTitle = useMemo(() => {
    if (!title) return 'Koki Sato';
    return `${title} | Koki Sato`;
  }, [title]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
    </Helmet>
  );
});

Meta.displayName = 'Meta';

export default Meta;
