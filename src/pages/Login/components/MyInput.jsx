import React from 'react';
import st from '../styles/Login.module.css';
import TextField from '@mui/material/TextField/TextField';

const MyInput = ({ name, type, handleChange, handleBlur, values, errors, touched, placeholder }) => {
  return (
    <div className={st.myInput}>
      <TextField
        className={st.myFormInput}
        fullWidth
        id={name}
        name={name}
        label={name}
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        type={type}
        error={errors}
        helperText={touched && errors}
      />
    </div>

  );
};

export default MyInput;