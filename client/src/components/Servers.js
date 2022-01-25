import {ServersProvider} from '../contexts/Servers';
import HeaderActions from './ServerList/HeaderActions/HeaderActions';
import ServerList from './ServerList/ServerList';

export default function Servers() {
  return (
    <ServersProvider>
      <HeaderActions />
      <ServerList />
    </ServersProvider>
  );
}
