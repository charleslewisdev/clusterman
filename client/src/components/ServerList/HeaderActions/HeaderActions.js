import Stack from '@mui/material/Stack';
import AddNewServer from './AddNewServer';

export default function HeaderButtons() {
  return (
    <>
      <Stack direction="row-reverse" spacing={2}>
        <AddNewServer />
      </Stack>
    </>
  );
}
