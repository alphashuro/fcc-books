import { connect } from 'react-redux';
import Nav from './Nav';

export default connect(state => ({ user: state.user }))(Nav);
