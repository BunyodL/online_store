import React from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const CardTitle = React.memo(({ title }) => {
  return (
    <CardContent
      style={{ paddingBottom: 0 }}
      sx={{
        height: { lg: 70, md: 60, sm: 50, xs: 50 },
        fontWeight: 'bold',
        paddingBlock: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        sx={{
          fontSize: { lg: 16, md: 15, sm: 13, xs: 10 },
          maxHeight: 80,
        }}
        gutterBottom
        variant='h7'
        component='span'
      >
        {title}
      </Typography>
    </CardContent>
  );
});

export default CardTitle;
