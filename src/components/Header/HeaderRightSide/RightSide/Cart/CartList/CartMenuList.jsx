import React from 'react';
import { Divider } from '@mui/material';
import CartProduct from './CartProduct/CartProduct';
import MenuList from '@mui/material/MenuList';
import { useProductsSelector } from '../../../../../../core/hooks/useMySelectors';
import st from '../Cart.module.css';
import {
  removeProductsFromCart,
  setAlert,
  setOpenAlert,
} from '../../../../../../redux-store/reducers/products-reducer';
import { useDispatch } from 'react-redux';

const CartMenuList = ({ handleClose, open }) => {
  const { productsInCart, errorMessage } = useProductsSelector();
  const dispatch = useDispatch();
  const handleAlertMessage = (type, message) => {
    dispatch(setAlert({ type, message }));
  };
  const handleRemoveFromCart = productId => {
    if (productsInCart.some(elem => elem.id === productId)) {
      dispatch(removeProductsFromCart(productId));
      if (errorMessage) {
        handleAlertMessage('error', errorMessage);
      } else {
        handleAlertMessage('success', 'Product removed from cart!');
      }
      dispatch(setOpenAlert(true));
    }
  };

  return (
    <MenuList
      id="cart-menu"
      onClose={handleClose}
      autoFocusItem={open}
      aria-labelledby="composition-button"
      className={productsInCart.length >= 4 ? st.menuListScroll : null}
    >
      {!productsInCart.length
        ? <span className={st.emptyCart}>Cart is empty</span>
        : <div>
          <Divider style={{ marginBlock: 5 }} />
          {productsInCart.map(p => (
              <CartProduct
                key={p.id}
                title={p.title}
                quantity={p.quantity}
                price={p.price}
                image={p.image}
                productId={p.id}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            )
          )}
          {productsInCart.reduce((acc, elem) => acc += elem.price * elem.quantity, 0 ).toFixed(2)}
        </div>
      }
    </MenuList>
  );
};

export default CartMenuList;