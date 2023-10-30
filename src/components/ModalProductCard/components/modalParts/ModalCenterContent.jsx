import React from 'react';
import { CardMedia } from '@mui/material';
import Typography from '@mui/joy/Typography';
import st from '../../styles/ModalProductCard.module.css';

const ModalCenterContent = ({ title, image, description }) => {
  return (
    <>
      <div className={st.modalContent}>
        <CardMedia
          sx={{
            height: { lg: 250, md: 200, sm: 160, xs: 130 },
            paddingInline: 5,
            boxSizing: 'border-box',
            objectFit: 'contain',
            paddingBlock: 1,
          }}
          component='img'
          alt={title}
          image={image}
        />
      </div>
      <Typography sx={{ fontSize: { lg: 16, md: 14, sm: 12, xs: 10 } }} id='modal-desc'>
        {description}
      </Typography>
    </>
  );
};

export default ModalCenterContent;
