import { setAlert, setOpenAlert } from "../../../redux-store/reducers/products-reducer";

// alert message
export const handleAlertMessage = (type, message, dispatch) => {
  dispatch(setAlert({ type, message }));
  dispatch(setOpenAlert(true));
};