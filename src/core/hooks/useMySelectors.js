import { useSelector } from 'react-redux';

export const useProductsSelector = () => useSelector(state => state.products);
export const useAuthSelector = () => useSelector(state => state.auth);
export const useSequenceSelector = () => useSelector(state => state.sequence);
export const useHeaderSelector = () => useSelector(state => state.header);
export const useModalSelector = () => useSelector(state => state.modal);
