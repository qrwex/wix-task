import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form, Formik } from 'formik';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import React from 'react';
import * as yup from 'yup';
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
          <Form>
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
          </Form>
        </Dialog>
      )}
    </Formik>
  );
};

export default AddNodeDialog;
