import React from 'react';
import { Divider } from '@mui/material';
import CartProduct from '../cartProduct/CartProduct';
import MenuList from '@mui/material/MenuList';
import st from '../../../styles/Cart.module.css';

const CartListMenu = ({
  handleClose,
  open,
  productsInCart,
  handleRemoveFromCart,
  numberRounding,
}) => {
  return (
    <MenuList
      id='cart-menu'
      onClose={handleClose}
      autoFocusItem={open}
      aria-labelledby='composition-button'
      className={productsInCart.length >= 4 ? st.menuListScroll : null}
    >
      {!productsInCart.length ? (
        <span className={st.emptyCart}>Cart is empty</span>
      ) : (
        <div>
          <Divider />
          {productsInCart.map((p) => (
            <CartProduct
              key={p.id}
              title={p.title}
              quantity={p.quantity}
              price={p.price}
              image={p.image}
              productId={p.id}
              handleRemoveFromCart={handleRemoveFromCart}
              numberRounding={numberRounding}
            />
          ))}
        </div>
      )}
    </MenuList>
  );
};

export default CartListMenu;
