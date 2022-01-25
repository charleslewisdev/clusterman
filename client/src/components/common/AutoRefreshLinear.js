import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import useInterval from '../../hooks/useInterval';

export default function AutoRefreshLinear({intervalSeconds = 30, onRefresh}) {
  const [currentSecond, setCurrentSecond] = useState(0);

  useInterval(() => {
    setCurrentSecond((currentSecond) => {
      if (currentSecond >= intervalSeconds) {
        console.log('auto refreshing');
        onRefresh();
        return 0;
      }
      return currentSecond + 1;
    });
  }, 1000);

  const progress = Math.floor((currentSecond / intervalSeconds) * 100);

  return (
    <Box sx={{width: '100%'}}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
