import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StorageIcon from '@mui/icons-material/Storage';

function NavMenuItem({icon, linkPath, text}) {
  const navigate = useNavigate();
  const handleMenuItemClick = (path) => navigate(path);

  return (
    <ListItem button key={text} onClick={() => handleMenuItemClick(linkPath)}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export default function NavMenu() {
  return (
    <Box sx={{overflow: 'auto'}}>
      <List>
        <NavMenuItem
          icon={<StorageIcon />}
          linkPath="/servers"
          text="Servers"
        />
        <NavMenuItem
          icon={<AutoAwesomeIcon />}
          linkPath="/dynamic-config"
          text="Dynamic Config"
        />
      </List>
    </Box>
  );
}
