import React from 'react';
import Categories from './Categories/Categories';
import Sorting from './Sorting/Sorting';
import { useDispatch } from 'react-redux';
import { useSequenceSelector } from '../../../core/hooks/useMySelectors';
import st from '../../../pages/ProductPage/ProductPage.module.css';

const CategoriesAndSorting = ({ setCategory, setSort }) => {
  const { category, sort, categories } = useSequenceSelector();
  const dispatch = useDispatch();

  const handleCategoryChange = event => {
    const {
      target: { value },
    } = event;
    dispatch(setCategory(typeof value === 'string' ? value.split(',') : value));
  };

  const handleSortChange = event => {
    dispatch(setSort(event.target.value));
  };

  return (
    <div className={st.sorting}>
      <Categories categories={categories} category={category} handleCategoryChange={handleCategoryChange} />
      <Sorting sort={sort} handleSortChange={handleSortChange} />
    </div>
  );
};

export default CategoriesAndSorting;
