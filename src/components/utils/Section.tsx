import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export type SectionProps = {
  children: React.ReactNode;
  title: string;
};

const Section: React.VFC<SectionProps> = React.memo(props => {
  const { children, title } = props;

  return (
    <Box>
      <Divider />
      <Container maxWidth='md' component='section' sx={{ my: 2 }}>
        <Typography
          variant='h4'
          sx={{
            fontWeight: 'bold',
            mb: 2,
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
        <Box>{children}</Box>
      </Container>
    </Box>
  );
});

Section.displayName = 'Section';

export default Section;
