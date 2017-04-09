import { connect } from 'react-redux';
import Nav from './Nav';
import { listenForAuth, signout } from '../Signin/container/actions';
import { pick } from 'ramda';

export default connect(pick([ 'user' ]), { listenForAuth, signout })(Nav);
