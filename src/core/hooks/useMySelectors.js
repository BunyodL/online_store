import { useSelector } from 'react-redux';

export const useProductsSelector = () => useSelector(state => state.products);
export const useAuthSelector = () => useSelector(state => state.auth);
