import { Card } from '@mui/material';
import React from 'react';

const PurchaseProduct = ({image, title, description, price, quantity}) => {

  return (
    <Card sx={{padding: '25px', textAlign: 'start'}} >
       <div style={{display: 'flex'}} >
         <img src={image} alt="" width={80} style={{paddingInline: '20px'}} />
         <h3>{title}</h3>
       </div>
       <p>{description}</p>
    </Card>
  );
};

export default PurchaseProduct;