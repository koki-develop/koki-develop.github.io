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
      <div className='border-t mb-2' />
      <Container>
        <h2 className='text-3xl text-center font-bold mb-2'>{title}</h2>
        <div>{children}</div>
      </Container>
    </div>
  );
});

Section.displayName = 'Section';

export default Section;
