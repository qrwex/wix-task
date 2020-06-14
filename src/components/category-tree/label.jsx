import { IconButton, Box } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React from 'react';
import AddNodeDialog from 'components/add-node-dialog';

const Label = ({ node, onAdd }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values) => {
    onAdd({
      id: node.id,
      label: values.label,
    });
    handleClose();
  };

  return (
    <>
      <Box pr={1} component="span">
        {node.label}
      </Box>
      <IconButton size="small" onClick={handleClick}>
        <Add />
      </IconButton>
      <AddNodeDialog open={open} onClose={handleClose} onSubmit={handleSubmit} />
    </>
  );
};

export default Label;
