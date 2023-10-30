import React from 'react';
import Button from '@mui/material/Button';
import { Navigate, NavLink } from 'react-router-dom';
import { useModalSelector } from '../../../../../core/hooks/useMySelectors';

const InfoButton = ({ handleOpenModal, productId }) => {
  const { modalIsOpen } = useModalSelector();

  return (
    <div>
      <Button
        component={NavLink}
        // to={`${productId}`}
        fullWidth
        sx={{
          paddingBlock: 0.2,
          paddingInline: 0.5,
          fontSize: { lg: 13, md: 12, sm: 10, xs: 8 },
          minWidth: '100%',
          width: { lg: 105, md: 100, sm: 80, xs: 70 },
        }}
        size="small"
        onClick={() => {
          // <Navigate to={`/${productId}`} />;
          handleOpenModal(productId);

        }
        }
      >
        Learn More
      </Button>
    </div>
  );
};

export default InfoButton;