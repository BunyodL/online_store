import React from 'react';
import Sheet from '@mui/joy/Sheet';
import { CircularProgress, Divider } from '@mui/material';
import ModalCenterContent from './ModalCenterContent';
import ModalFooter from './ModalFooter';
import ModalProductTitle from './ModalProductTitle';
import ModalCloseButton from './ModalCloseButton';
import { useGetCurrentProductQuery } from '../../../../api/apiSlice';
import ModalError from './ModalError';

const ModalSheet = ({ productId }) => {
  const {
    data = {},
    isFetching,
    isError,
    isSuccess,
    error,
  } = useGetCurrentProductQuery(productId);
  const { title, images, description, category, price } = data;

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
      {isFetching && <CircularProgress color="inherit" />}
      {isError && <ModalError error={error} />}
      {isSuccess && (
        <>
          <ModalCloseButton />
          <ModalProductTitle title={title} />
          <ModalCenterContent
            title={title}
            images={images}
            description={description}
            category={category}
          />
          <Divider sx={{ marginTop: 2 }} />
          <ModalFooter price={price} />
        </>
      )}
    </Sheet>
  );
};

export default ModalSheet;
