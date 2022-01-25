import {useServersDispatch} from '../contexts/Servers';
import {getServerList} from '../services/servers';

export default function useRefreshServerList() {
  const dispatch = useServersDispatch();

  return async () => {
    const list = await getServerList();
    console.log('refresh list');
    dispatch({type: 'SET_LIST', list});
  };
}
