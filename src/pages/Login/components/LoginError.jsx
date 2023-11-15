import React from 'react';
import st from '../styles/Login.module.css';
import { NavLink } from 'react-router-dom';

const LoginError = ({ error }) => {
  return (
    <>
      <h2>
        {error.status === 401
          ? [<span key={error.status} className={st.errorMessage}>{error.data.message}</span>, '. ',
            <NavLink to={'/signup'}>Sign Up</NavLink>, ' first']
          : [error.error, '. Check your Internet connection']}
      </h2>
    </>
  );
};

export default LoginError;