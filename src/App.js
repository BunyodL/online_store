import React from 'react';
import './App.css';
import ProductPageContainer from './components/ProductPage/ProductPageContainer';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

// import CartList from './components/CartIcon/CartList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductPageContainer />} />
        <Route path="/login" element={<Login />} />
        {/*<Route path='/cart' element={<CartList />} />*/}
      </Routes>

    </div>
  );
}


export default App;
