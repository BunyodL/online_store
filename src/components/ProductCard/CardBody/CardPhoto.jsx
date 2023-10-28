import React from 'react';
import CardMedia from '@mui/material/CardMedia';

const CardPhoto = React.memo(({ image, title }) => {
  return (
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
      component="img"
      alt={title}
      image={image}
    />
  );
});

export default CardPhoto;