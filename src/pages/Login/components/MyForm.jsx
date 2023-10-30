import React from 'react';
import st from '../styles/Login.module.css';
import MyInput from './MyInput';

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
        <h1>Authorization!</h1>
        {/*login input*/}
        <MyInput touched={touched.username} handleChange={handleChange} handleBlur={handleBlur}
                 type="text" name="username" errors={errors.username} values={values.username}
                 placeholder="donero" />
        {/*password input*/}
        <MyInput name="password" touched={touched.password} handleChange={handleChange} type="password"
                 handleBlur={handleBlur} errors={errors.password} values={values.password} placeholder="ewedon" />
        {/*submit button*/}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
};

export default MyForm;
