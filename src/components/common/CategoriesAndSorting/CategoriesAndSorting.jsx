import React from 'react';
import Categories from './Categories/Categories';
import Sorting from './Sorting/Sorting';
import { useDispatch } from 'react-redux';
import { useProductsSelector } from '../../../core/hooks/useMySelectors';
import st from '../../ProductPage/ProductPage.module.css';

const CategoriesAndSorting = ({ setCategory, setSort }) => {
  const { category, sort } = useProductsSelector();
  const dispatch = useDispatch();

  const handleCategoryChange = event => {
    const {
      target: { value },
    } = event;
    dispatch(
      setCategory(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value
      )
    );
  };

  const handleSortChange = event => {
    dispatch(setSort(event.target.value));
  };

  return (
    <div className={st.sorting}>
      <Categories category={category} handleCategoryChange={handleCategoryChange} />
      <Sorting sort={sort} handleSortChange={handleSortChange} />
    </div>
  );
};

export default CategoriesAndSorting;
