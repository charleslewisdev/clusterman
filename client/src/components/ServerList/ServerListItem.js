import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import {getTimeSince} from '../../utils/datetime';
import {getColorByServerState} from '../../utils/servers';
import Actions from './ServerListItemActions';

export default function ServerListItem({server}) {
  const color = getColorByServerState(server.dockerState);

  return (
    <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
      <TableCell>
        <IconButton color="primary" aria-label="options" component="span">
          <Brightness1Icon sx={{color}} />
        </IconButton>
      </TableCell>
      <TableCell>{server.name}</TableCell>
      <TableCell>{server.map}</TableCell>
      <TableCell>{server.dockerStatus}</TableCell>
      <TableCell>
        {/*server.state.Status === 'running' &&
          getTimeSince(server.dockerStatusSince)*/}
      </TableCell>
      <TableCell align="right">
        {server.numPlayersConnected}/{server.numPlayersMax}
      </TableCell>
      <TableCell>
        <Actions server={server} />
      </TableCell>
    </TableRow>
  );
}
