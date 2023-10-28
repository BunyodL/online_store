import React from 'react';
import { Formik } from 'formik';
import { requiredField } from '../../components/utils/validators/validators';
import MyForm from './MyForm';

const LoginForm = ({ logInToStore }) => {
  const onLoginDataSubmit = loginData => logInToStore(loginData);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => requiredField(values)}
      onSubmit={(values, { setSubmitting }) => {
        onLoginDataSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <MyForm
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </Formik>
  );
};

export default LoginForm;
