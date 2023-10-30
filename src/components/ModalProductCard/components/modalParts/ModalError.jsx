import React from 'react';

const ModalError = ({ error }) => {
  return (
    <h1 style={{ textAlign: 'center', fontSize: 20 }}>
      {`${error.error}. Check your Internet connection`}
    </h1>
  );
};

export default ModalError;
