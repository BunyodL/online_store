import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Rating from '@mui/material/Rating';
import st from '../ProductPage/ProductPage.module.css';

const ProductCard = ({ title, image, description, rating, price, category }) => {
  return (
    <Card sx={{ maxWidth: 500, height: 340 }}>
      <div className={st.cardBasis}>
        <CardMedia
          sx={{ width: '100%', height: 160, paddingInline: 5, boxSizing: 'border-box', objectFit: 'contain', paddingBlock: 1 }}
          component='img'
          alt={title}
          image={image}
        />
        <CardContent sx={{ height: 70, fontWeight: 'bold' }}>
          <Typography gutterBottom variant='h7' component='div'>
            {title}
          </Typography>
        </CardContent>
      </div>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={st.rating}>
          <div className={st.count}>
            <b>Count:</b> {rating.count}
          </div>
          <div style={{ display: 'flex', height: '30px', alignItems: 'center' }}>
            <span>{rating.rate}</span>
            <Rating name='half-rating-read' value={rating.rate} readOnly />
          </div>
        </div>
        <div>
          <div>
            <b>Price:</b> {price}$
          </div>
          <Button size='small'>Learn More</Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
