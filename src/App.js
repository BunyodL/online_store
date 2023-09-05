import React from 'react';
import './App.css';
import ProductPageContainer from './components/ProductPage/ProductPageContainer';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
// import LoginContainer from './components/Login/LoginContainer';
import Login from './components/Login/Login';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<ProductPageContainer />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  );
}


export default App;
