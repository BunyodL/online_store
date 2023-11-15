export const filterCategories = (products, categories) => {
  if (!categories.length) {
    return products;
  }
  return categories.map(item => products.filter(elem => elem.category.name === item)).flat();
}
