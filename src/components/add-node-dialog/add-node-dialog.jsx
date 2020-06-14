import { Form, Formik } from 'formik';
import {
  DialogTitle, DialogContent, Dialog, DialogActions, Button,
} from '@material-ui/core';
import React from 'react';
import * as yup from 'yup';
import StopPropagation from 'components/stop-propagation/stop-propagation';
import FormTextField from '../form-text-field';

const validationSchema = yup.object().shape({
  label: yup.string().required('Label is required'),
});

const AddNodeDialog = (props) => {
  const { open, onClose, onSubmit } = props;

  return (
    <Formik initialValues={{ label: '' }} onSubmit={onSubmit} validationSchema={validationSchema} validateOnMount>
      {(formikProps) => (
        <Dialog open={open} onClose={onClose}>
          <StopPropagation component={Form}>
            <DialogTitle>Add category</DialogTitle>
            <DialogContent>
              <FormTextField autoFocus margin="dense" label="Label" type="text" fullWidth name="label" autoComplete="off" />
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary" disabled={!formikProps.isValid}>
                Save
              </Button>
            </DialogActions>
          </StopPropagation>
        </Dialog>
      )}
    </Formik>
  );
};

export default AddNodeDialog;
