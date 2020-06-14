import React from 'react';

const StopPropagation = ({ component: Component, ...rest }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <Component onClick={stopPropagation} {...rest} />
  );
};

export default StopPropagation;
