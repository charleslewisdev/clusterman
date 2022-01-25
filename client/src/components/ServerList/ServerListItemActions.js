import {useRef, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useRefreshServerList from '../../hooks/useRefreshServerList';
import {restartServer, startServer, stopServer} from '../../services/servers';

export default function ServerListItemActions({server}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const isRunning = server.dockerStatus === 'running';

  const refreshList = useRefreshServerList();

  const handleClick = ({currentTarget}) => {
    setAnchorEl(currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickStartServer = async () => {
    handleClose();
    const response = await startServer(server.id);
    console.log('response', response);
    refreshList();
  };

  const handleClickRestartServer = async () => {
    handleClose();
    const response = await restartServer(server.id);
    console.log('response', response);
    refreshList();
  };

  const handleClickStopServer = async () => {
    handleClose();
    const response = await stopServer(server.id);
    console.log('response', response);
    refreshList();
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        color="primary"
        component="span"
        onClick={handleClick}
        aria-label="options"
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem disabled={isRunning} onClick={handleClickStartServer}>
          Start
        </MenuItem>
        <MenuItem disabled={!isRunning} onClick={handleClickRestartServer}>
          Restart
        </MenuItem>
        <MenuItem disabled={!isRunning} onClick={handleClickStopServer}>
          Stop
        </MenuItem>
      </Menu>
    </div>
  );
}
