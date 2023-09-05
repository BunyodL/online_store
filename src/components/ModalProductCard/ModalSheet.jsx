import React from 'react';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { useProductsSelector } from '../../core/hooks/useMySelectors';
import { CircularProgress, Divider, Typography } from '@mui/material';
import ModalCenterContent from './ModalCenterContent';
import ModalFooter from './ModalFooter';

const ModalSheet = () => {
  const {
    isFetching,
    currentProduct: { title, image, description, rating, price, category },
  } = useProductsSelector();

  return (
    <Sheet
      variant='outlined'
      sx={{
        maxWidth: { lg: 700, md: 460, sm: 400, xs: 250 },
        maxHeight: { lg: 600, md: 550, sm: 450, xs: 400 },
        borderRadius: 'md',
        p: 3,
        boxShadow: 'lg',
      }}
    >
      {isFetching ? (
        <CircularProgress color='inherit' />
      ) : (
        <>
          <ModalClose
            variant='outlined'
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.surface',
            }}
          />
          <Typography
            sx={{ fontWeight: 'bold', fontSize: { lg: 22, md: 18, sm: 15, xs: 13 } }}
            component='h2'
            id='modal-title'
            variant='h6'
            mb={1}
          >
            {title}
          </Typography>
          <ModalCenterContent title={title} image={image} description={description} category={category} />
          <Divider sx={{ marginTop: 2 }} />
          <ModalFooter rating={rating} price={price} />
        </>
      )}
    </Sheet>
  );
};

export default ModalSheet;
