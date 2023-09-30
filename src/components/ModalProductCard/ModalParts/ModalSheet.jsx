import React from 'react';
import Sheet from '@mui/joy/Sheet';
import { useProductsSelector } from '../../../core/hooks/useMySelectors';
import { CircularProgress, Divider } from '@mui/material';
import ModalCenterContent from './ModalCenterContent';
import ModalFooter from './ModalFooter';
import ModalProductTitle from './ModalProductTitle';
import ModalCloseButton from './ModalCloseButton';

const ModalSheet = () => {
  const {
    isFetching,
    currentProduct: { title, image, description, rating, price, category },
  } = useProductsSelector();

  return (
    <Sheet
      variant="outlined"
      sx={{
        maxWidth: { lg: 700, md: 460, sm: 400, xs: 250 },
        maxHeight: { lg: 600, md: 550, sm: 450, xs: 400 },
        borderRadius: 'md',
        p: 3,
        boxShadow: 'lg',
      }}
    >
      {isFetching ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          <ModalCloseButton />
          <ModalProductTitle title={title} />
          <ModalCenterContent title={title} image={image} description={description} category={category} />
          <Divider sx={{ marginTop: 2 }} />
          <ModalFooter rating={rating} price={price} />
        </>
      )}
    </Sheet>
  );
};

export default ModalSheet;
