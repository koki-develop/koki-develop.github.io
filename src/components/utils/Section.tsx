import classNames from 'classnames';
import React, { memo } from 'react';
import Container from '@/components/utils/Container';

export type SectionProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
};

const Section: React.VFC<SectionProps> = memo(props => {
  const { children, className, title, ...divProps } = props;

  return (
    <section {...divProps} className={classNames(className, 'mb-4')}>
      <div className='mb-4 border-t border-gray-300' />
      <Container>
        <h2 className='mb-2 text-center text-3xl font-bold'>{title}</h2>
        <div className='py-2'>{children}</div>
      </Container>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
