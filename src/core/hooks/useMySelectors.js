import { useSelector } from 'react-redux';

export const useProductsSelector = () => useSelector(state => state.products);
export const useAuthSelector = () => useSelector(state => state.auth);
export const useSequenceSelector = () => useSelector(state => state.sequence);
export const useCartSelector = () => useSelector(state => state.cart);
export const useHeaderSelector = () => useSelector(state => state.header);
