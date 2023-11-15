import React from 'react';
import { Formik } from 'formik';
import MyForm from './MyForm';
import * as yup from 'yup';

const LoginForm = ({ logInToStore }) => {
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        logInToStore(values);
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
