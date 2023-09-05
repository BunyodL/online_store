import React from 'react';
import st from './Login.module.css';

const MyForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
  return (
    <form onSubmit={handleSubmit} className={st.formContainer}>
      <div className={st.form}>
        <h1>Authorization!</h1>
        <div className={st.email}>
          <div className={st.emailInput}>
            <label htmlFor='email'>Username:</label>
            <input type='text' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='donero' />
          </div>
          {errors.email && touched.email && errors.email}
        </div>
        <div className={st.password}>
          <div className={st.passwordInput}>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder='ewedon'
            />
          </div>
          {errors.password && touched.password && errors.password}
        </div>
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
};

export default MyForm;
