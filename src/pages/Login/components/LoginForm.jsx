import React from 'react';
import { Formik } from 'formik';
import { requiredField } from '../../../components/utils/validators/validators';
import MyForm from './MyForm';

const LoginForm = ({ logInToStore }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validate={(values) => requiredField(values)}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
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
