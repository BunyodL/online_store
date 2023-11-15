import React from 'react';
import CardMedia from '@mui/material/CardMedia';

const CardPhoto = React.memo(({ images, title }) => {
  return (
    <CardMedia
      sx={{
        width: '100%',
        height: { lg: 200, md: 200, sm: 180, xs: 150 },
        // paddingInline: 5,
        boxSizing: 'border-box',
        objectFit: 'contain',
        // paddingBlock: 1,
        pointerEvents: 'none',
      }}
      component="img"
      alt={title}
      image={images[0]}
    />
  );
});

export default CardPhoto;