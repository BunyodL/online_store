export const filterCategories = (products, category) => {
  if (!category.length) {
    return products;
  }
  return category.map(item => products.filter(elem => elem.category === item)).flat();
}
