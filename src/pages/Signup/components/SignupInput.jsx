import React from 'react';
import st from '../styles/Signup.module.css'
import TextField from '@mui/material/TextField/TextField';

const SignupInput = ({name, errors, register}) => {
  return (
    <div className={st.input} >
      <TextField label={name} {...register(name)} />
      <p>{errors}</p>
    </div>
  );
};

export default SignupInput;