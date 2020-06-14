import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import Box from '@material-ui/core/Box';
import AddNodeDialog from '../add-node-dialog';

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
        <AddIcon />
      </IconButton>
      <AddNodeDialog open={open} onClose={handleClose} onSubmit={handleSubmit} />
    </>
  );
};

export default Label;
