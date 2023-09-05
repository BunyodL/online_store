import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import st from './ProductCard.module.css';

const CardBasis = ({ productId, title, image, handleProductId }) => {
  return (
    <div className={st.cardBasis} onClick={() => handleProductId(productId)}>
      <CardMedia
        sx={{
          width: '100%',
          height: { lg: 160, md: 150, sm: 130, xs: 100 },
          paddingInline: 5,
          boxSizing: 'border-box',
          objectFit: 'contain',
          paddingBlock: 1,
          pointerEvents: 'none',
        }}
        component='img'
        alt={title}
        image={image}
      />
      <CardContent
        style={{ paddingBottom: 0 }}
        sx={{ height: { lg: 100, md: 120, sm: 110, xs: 80 }, fontWeight: 'bold', paddingBlock: 0, paddingInline: 1 }}
      >
        <Typography sx={{ fontSize: { lg: 16, md: 15, sm: 13, xs: 10 }, maxHeight: 80 }} gutterBottom variant='h7' component='div'>
          {title}
        </Typography>
      </CardContent>
    </div>
  );
};

export default CardBasis;
