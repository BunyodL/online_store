import React from 'react';
import LoginForm from './components/LoginForm';
import Preloader from '../../components/common/preloader/Preloader';
import { Navigate } from 'react-router-dom';
import st from './styles/Login.module.css';
import { useAuthSelector } from '../../core/hooks/useMySelectors';
import { useAuthToStoreMutation } from '../../api/apiSlice';
import { useDispatch } from 'react-redux';
import { setPersonData, setToken } from '../../redux-store/reducers/auth-reducer';

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuthSelector();
  const [logInToStore, { isLoading, data, error, originalArgs, isSuccess, isError }] =
    useAuthToStoreMutation();

  if (isSuccess) {
    dispatch(setPersonData(originalArgs));
    dispatch(setToken(data));
  }

  if (isAuth) return <Navigate to={'/'} />;

  return (
    <>
      {isLoading && <Preloader isFetching={isLoading} />}
      <div className={st.loginContainer}>
        <h1>Log in to be able to order in our store</h1>
        {isError && (
          <h2>
            {error.originalStatus === 401
              ? [
                  <span key={error.data} className={st.errorMessage}>
                    {error.data}
                  </span>,
                  '. Try again',
                ]
              : [error.error, '. Check your Internet connection']}
          </h2>
        )}
        <LoginForm logInToStore={logInToStore} />
      </div>
    </>
  );
};

export default Login;
