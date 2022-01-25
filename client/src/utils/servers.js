import {green, grey, red} from '@mui/material/colors';

export const getColorByServerState = (state) => {
  switch (state) {
    case 'exited':
      return red[500];
    case 'running':
      return green[500];
    default:
      return grey[500];
  }
};
