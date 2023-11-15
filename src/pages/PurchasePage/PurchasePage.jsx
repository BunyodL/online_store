import React from 'react';
import { useProductsSelector } from '../../core/hooks/useMySelectors';
import PurchaseProduct from './PurchaseProduct';
import { Card } from '@mui/material';
import CartTotalPrice from '../../components/header/components/headerRightSide/rightSide/cart/components/cartList/components/CartTotalPrice';
import st from './styles/Purchase.module.css';

const PurchasePage = () => {
  const { productsInCart } = useProductsSelector();

  return (
    <>
      {!productsInCart.length && <h1 style={{ marginTop: '180px' }}>Cart is empty</h1>}
      <div className={st.purchasePage}>
        <div className={st.purchaseList}>
          {productsInCart.map((p) => (
            <PurchaseProduct
              key={p.id}
              image={p.image}
              title={p.title}
              description={p.description}
              quantity={p.quantity}
            />
          ))}
        </div>
        {productsInCart.length ? (
          <Card className={st.check}>
            <CartTotalPrice productsInCart={productsInCart} />
          </Card>
        ) : null}
      </div>
    </>
  );
};

export default PurchasePage;
