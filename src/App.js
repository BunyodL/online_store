import React from 'react';
import './App.css';
import ProductPageContainer from './pages/ProductPage/ProductPageContainer';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import HeaderContainer from './components/header/HeaderContainer';
import CartPage from './pages/CartPage/CartPage';
import PurchasePage from './pages/PurchasePage/PurchasePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

function App() {
  return (<div className="App">
    <HeaderContainer />
    <div className="app-wrapper">
      <Routes>
        <Route path="/products/*" element={<ProductPageContainer />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </div>);
}

export default App;
