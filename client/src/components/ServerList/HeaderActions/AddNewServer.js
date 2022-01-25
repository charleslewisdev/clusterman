import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import {useFormDispatch, useFormState} from '../../../contexts/Form';
import {addServer} from '../../../services/servers';
import ModalForm from '../../common/ModalForm';
import mapOptions from '../../../constants/maps';

const numPlayersMaxOptions = Array.from({length: 100}, (_, i) => i + 1);
const addServerFormInitialState = {
  name: 'PR15M - The Island',
  map: 'TheIsland',
  clusterID: 'dinorancherPR15M',
  numPlayersMax: 10,
  serverPassword: 'craptor',
  serverAdminPassword: '654cloud456',
  dynamicConfigUrl:
    'https://my-arkse-cluster.s3.us-west-2.amazonaws.com/dynamic_config.ini',
  portGame: '30010',
  portRcon: '30040',
  portSteamQuery: '30030',
  gameParams: '-NoBattlEye',
  dataDir: '/home/dino-rancher/arkse-PR15M',
};

function AddServerForm() {
  const dispatch = useFormDispatch();
  const formState = useFormState();

  const handleUpdateField = (key, value) => {
    dispatch({type: 'UPDATE_FIELD', key, value});
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {m: 1},
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl fullWidth>
        <TextField
          label="Server Name"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('name', value);
          }}
          value={formState.name}
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="map-label">Map</InputLabel>
        <Select
          labelId="map-label"
          id="map"
          value={formState.map}
          label="map"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('map', value);
          }}
        >
          {mapOptions.map(({displayName, name}) => {
            return (
              <MenuItem key={name} value={name}>
                {displayName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="numPlayersMax-label">Max Players</InputLabel>
        <Select
          labelId="numPlayersMax-label"
          id="numPlayersMax"
          value={formState.numPlayersMax}
          label="numPlayersMax"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('numPlayersMax', value);
          }}
        >
          {numPlayersMaxOptions.map((option) => {
            return (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Server Password"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('serverPassword', value);
          }}
          value={formState.serverPassword}
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Server Admin Password"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('serverAdminPassword', value);
          }}
          value={formState.serverAdminPassword}
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Cluster ID"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('clusterID', value);
          }}
          value={formState.clusterID}
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Dynamic Config URL"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('dynamicConfigUrl', value);
          }}
          value={formState.dynamicConfigUrl}
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Data Dir"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('dataDir', value);
          }}
          value={formState.dataDir}
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="RCON Port"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('portRcon', value);
          }}
          value={formState.portRcon}
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Game Port"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('portGame', value);
          }}
          value={formState.portGame}
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Steam Query Port"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('portSteamQuery', value);
          }}
          value={formState.portSteamQuery}
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Game Params"
          onChange={({target}) => {
            const {value} = target;
            handleUpdateField('gameParams', value);
          }}
          value={formState.gameParams}
          variant="outlined"
        />
      </FormControl>
    </Box>
  );
}

export default function AddNewServer() {
  const handleSaveAddServerForm = async (formValues) => {
    console.log('form values', formValues);
    const response = await addServer(formValues);
    console.log('response', response);
  };

  return (
    <ModalForm
      initialValues={addServerFormInitialState}
      onSubmit={handleSaveAddServerForm}
      title="Add Server"
      trigger={
        <Button variant="contained" startIcon={<AddIcon />}>
          Add
        </Button>
      }
    >
      <AddServerForm />
    </ModalForm>
  );
}
