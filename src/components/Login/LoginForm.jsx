import React from 'react';
import { Formik } from 'formik';
import { requiredField } from '../utils/validators/validators';
import MyForm from './MyForm';
import { useDispatch } from 'react-redux';

const LoginForm = ({ login }) => {
  const dispatch = useDispatch();

  const onLoginDataSubmit = loginData => {
    dispatch(login(loginData));
  };

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
