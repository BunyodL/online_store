import React, { useEffect } from 'react';
import './App.css';
import ProductPageContainer from './pages/ProductPage/ProductPageContainer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import HeaderContainer from './components/header/HeaderContainer';
import CartPage from './pages/CartPage/CartPage';
import PurchasePage from './pages/PurchasePage/PurchasePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import Signup from './pages/Signup/Signup';

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(`The current route is ${location.pathname}`);
  }, [location]);

  return (
    <div className="App">
      <HeaderContainer />
      <div className="app-wrapper">
        <Routes>
          <Route path={`/products`} element={<ProductPageContainer />}>
            <Route path={`:id`} element={<ProductPageContainer />} />
          </Route>
          <Route path="/cart" lazy={() => import('./pages/CartPage/CartPage')} element={<CartPage />} />
          <Route path="/purchase" lazy={() => import('./pages/PurchasePage/PurchasePage')} element={<PurchasePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
