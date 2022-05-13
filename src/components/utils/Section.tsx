import React from 'react';
import Container from '@/components/utils/Container';

export type SectionProps = {
  children: React.ReactNode;
  title: string;
};

const Section: React.VFC<SectionProps> = React.memo(props => {
  const { children, title } = props;

  return (
    <div className='mb-2'>
      <div className='mb-2 border-t' />
      <Container>
        <h2 className='mb-2 text-center text-3xl font-bold'>{title}</h2>
        <div>{children}</div>
      </Container>
    </div>
  );
});

Section.displayName = 'Section';

export default Section;
