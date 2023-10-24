import React from 'react';
import './App.css';
import ProductPageContainer from './pages/ProductPage/ProductPageContainer';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductPageContainer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}


export default App;
