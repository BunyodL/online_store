import React from 'react';
import Categories from './Categories/Categories';
import Sorting from './Sorting/Sorting';
import { useDispatch } from 'react-redux';
import { useSequenceSelector } from '../../../core/hooks/useMySelectors';
import st from '../../../pages/ProductPage/ProductPage.module.css';
import { setSelectedCategories, setSelectedSort } from '../../../redux-store/reducers/sequence-reducer';

const CategoriesAndSorting = React.memo(() => {
  const { selectedCategories, selectedSort, allCategories } = useSequenceSelector();
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch(setSelectedCategories(typeof value === 'string' ? value.split(',') : value));
  };

  const handleSortChange = (event) => {
    dispatch(setSelectedSort(event.target.value));
  };

  return (
    <div className={st.sorting}>
      <Categories allCategories={allCategories} selectedCategories={selectedCategories} handleCategoryChange={handleCategoryChange} />
      <Sorting selectedSort={selectedSort} handleSortChange={handleSortChange} />
    </div>
  );
});

export default CategoriesAndSorting;
