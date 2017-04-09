import { connect } from 'react-redux';
import Nav from './Nav';
import { listenForAuth } from '../Signin/container/actions';
import { pick } from 'ramda';

export default connect(pick([ 'user' ]), { listenForAuth })(Nav);
