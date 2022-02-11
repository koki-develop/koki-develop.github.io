import { useMediaQuery, Breakpoint } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const isDown = (breakpoint: Breakpoint): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint));
};
