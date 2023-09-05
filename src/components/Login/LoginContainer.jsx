import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../../redux-store/reducers/auth-reducer';

const mapStateToProps = state => ({
  isFetching: state.products.isFetching,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
