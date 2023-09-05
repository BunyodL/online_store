export const productsOrder = (allProducts, productSort) => {
  console.log('ORDER RENDER');
  // ВЫПОЛНЯЮТСЯ НЕНУЖНЫЕ РЕНДЕРЫ!!!
  switch (productSort) {
    case 'name': {
      return [...allProducts].sort((a, b) => a.title.localeCompare(b.title));
    }
    case 'rating': {
      return [...allProducts].sort((a, b) => b.rating.rate - a.rating.rate);
    }
    case 'count': {
      return [...allProducts].sort((a, b) => b.rating.count - a.rating.count);
    }
    case 'price': {
      return [...allProducts].sort((a, b) => b.price - a.price);
    }
    default:
      return allProducts;
  }
};
