import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export type SectionProps = {
  children: React.ReactNode;
  title?: string;
  hideTitle?: boolean;
  disablePadding?: boolean;
};

const Section: React.VFC<SectionProps> = React.memo(props => {
  const { children, title, hideTitle, disablePadding } = props;

  return (
    <div>
      {title && <Divider id={title} />}
      <Box component='section' sx={{ m: 3 }}>
        {title && !hideTitle && (
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
        )}
        <Container disableGutters={disablePadding} maxWidth='md'>
          {children}
        </Container>
      </Box>
    </div>
  );
});

Section.displayName = 'Section';

export default Section;
