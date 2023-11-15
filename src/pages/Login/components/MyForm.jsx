import React from 'react';
import st from '../styles/Login.module.css';
import MyInput from './MyInput';
import { NavLink } from 'react-router-dom';

const MyForm = ({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => {
  return (
    <form onSubmit={handleSubmit} className={st.formContainer}>
      <div className={st.form}>
        <h1>Welcome!</h1>
        {/*login input*/}
        <MyInput touched={touched.email} handleChange={handleChange} handleBlur={handleBlur}
                 type="text" name="email" errors={errors.email} values={values.email}
                 placeholder="example@mail.com" />
        {/*password input*/}
        <MyInput name="password" touched={touched.password} handleChange={handleChange} type="password"
                 handleBlur={handleBlur} errors={errors.password} values={values.password}
                 placeholder="qwerty1234" />
        {/*submit button*/}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </button>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span>Don't have an account?</span>
          <NavLink to={'/signup'}>Sign up</NavLink>
        </div>
      </div>
    </form>
  );
};

export default MyForm;
