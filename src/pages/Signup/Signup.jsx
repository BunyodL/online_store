import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignupInput from './components/SignupInput';
import { schema } from './components/signupYup';
import st from './styles/Signup.module.css';
import storeIcon from '../../images/store-icon.png'
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  const signupInput = {
    username: 'username',
    age: 'age',
    email: 'email',
    password: 'password'
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={st.signupContainer}>
      <div className={st.signupForm}>
        <div className={st.formHeader} >
          <h3 style={{margin: 0}} >Authorization</h3>
          <img src={storeIcon} alt="" width='60px' />
        </div>
        {Object.values(signupInput).map(elem =>
          <SignupInput name={elem} errors={errors[elem]?.message} register={register} />
        )}

        <div>
          <input type="submit" className={st.submitInput} value={'Sign up'} />
          <div style={{fontSize: 14,}} >
            <span>Already have an account?</span>
            <NavLink to={'/login'}>Sign in</NavLink>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;