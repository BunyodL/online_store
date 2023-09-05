export const filterCategories = (products, category) =>
  category.map(item => products.filter(elem => elem.category === item.toLowerCase())).flat();
