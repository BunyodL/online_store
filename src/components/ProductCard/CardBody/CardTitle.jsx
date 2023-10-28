import React from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const CardTitle = React.memo(({ title }) => {
  return (
    <CardContent
      style={{ paddingBottom: 0 }}
      sx={{ height: { lg: 100, md: 120, sm: 110, xs: 80 }, fontWeight: 'bold', paddingBlock: 0, paddingInline: 1 }}
    >
      <Typography sx={{ fontSize: { lg: 16, md: 15, sm: 13, xs: 10 }, maxHeight: 80 }} gutterBottom variant="h7"
                  component="div">
        {title}
      </Typography>
    </CardContent>
  );
});

export default CardTitle;