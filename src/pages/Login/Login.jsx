import React from 'react';
import LoginForm from './LoginForm';
import Preloader from '../../components/common/Preloader/Preloader';
import { Navigate } from 'react-router-dom';
import st from './Login.module.css';
import { login } from '../../redux-store/reducers/auth-reducer';
import { useAuthSelector, useProductsSelector } from '../../core/hooks/useMySelectors';

const Login = () => {
  const { isFetching } = useProductsSelector();
  const { isAuth } = useAuthSelector();

  if (isAuth) return <Navigate to={'/'} />;

  return (
    <>
      {isFetching && <Preloader isFetching={isFetching} />}
      <div className={st.loginContainer}>
        <h1>Log in to be able to order in our store</h1>
        <LoginForm login={login} />
      </div>
    </>
  );
};

export default Login;
