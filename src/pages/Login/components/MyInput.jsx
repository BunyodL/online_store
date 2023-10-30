import React from 'react';
import st from '../styles/Login.module.css';

const MyInput = ({ name, type, handleChange, handleBlur, values, errors, touched, placeholder }) => {
  return (
    <div className={st.myInput}>
      <div className={st.myFormInput}>
        <label htmlFor={name}>{name}:</label>
        <input
          type={type}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values}
          placeholder={placeholder}
        />
      </div>
      {errors && touched && errors}
    </div>
  );
};

export default MyInput;