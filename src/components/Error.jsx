import React from 'react';

const Error = ({ message }) => {
  return (
    <div>
      <p className="text-xs font-bold">{message}</p>
    </div>
  );
};

export default Error;
