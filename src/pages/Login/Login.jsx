import React from 'react';
import LoginForm from './components/LoginForm';
import Preloader from '../../components/common/preloader/Preloader';
import { useNavigate } from 'react-router-dom';
import st from './styles/Login.module.css';
import { useAuthSelector } from '../../core/hooks/useMySelectors';
import { useLoginToStoreMutation } from '../../api/apiSlice';
import { useDispatch } from 'react-redux';
import { setPersonData, setToken, signIn } from '../../redux-store/reducers/auth-reducer';
import LoginError from './components/LoginError';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuthSelector();
  const [logInToStore, { isLoading, data, error, originalArgs, isSuccess, isError }] =
  useLoginToStoreMutation();

  if (isSuccess) {
    dispatch(signIn());
    dispatch(setPersonData(originalArgs));
    dispatch(setToken(data));
  }

  if (isAuth) return navigate(-1);

  return (
    <>
      {isLoading && <Preloader isFetching={isLoading} />}
      <div className={st.loginContainer}>
        <h1>Log in to be able to order in our store</h1>
        {isError && <LoginError error={error} />}
        <LoginForm logInToStore={logInToStore} />
      </div>
    </>
  );
};

export default Login;
