import {useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useServersState} from '../../contexts/Servers';
import useRefreshServerList from '../../hooks/useRefreshServerList';
import AutoRefreshLinear from '../common/AutoRefreshLinear';
import ServerListItem from './ServerListItem';

export default function ServerList() {
  const {list} = useServersState();
  console.log('servers', list);
  const refreshList = useRefreshServerList();

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>Map</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Status Since</TableCell>
              <TableCell align="right">Players</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((server) => {
              const id = server._id.slice(0, 12);
              return (
                <ServerListItem key={`ServerListItem-${id}`} server={server} />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <AutoRefreshLinear onRefresh={refreshList} />
    </>
  );
}
