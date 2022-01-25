import {cloneElement, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {FormProvider, useFormState} from '../../contexts/Form';

function ModalFormGuts({children, onSubmit, title, trigger}) {
  const [isOpen, setIsOpen] = useState(false);

  const formState = useFormState();

  const handleClickTrigger = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickSave = () => {
    // TODO: some magic to let the user know we're submitting
    setIsOpen(false);
    onSubmit(formState);
  };

  const _trigger = cloneElement(trigger, {onClick: handleClickTrigger});

  return (
    <>
      {_trigger}
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClickSave} variant="contained">
            Save
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default function ModalForm({
  children,
  initialValues,
  onSubmit,
  title,
  trigger,
}) {
  return (
    <FormProvider initialState={initialValues}>
      <ModalFormGuts onSubmit={onSubmit} title={title} trigger={trigger}>
        {children}
      </ModalFormGuts>
    </FormProvider>
  );
}
