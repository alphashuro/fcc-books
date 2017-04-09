import { connect } from 'react-redux';
import Signin from '../Signin';
import { signin } from './actions';

export default connect(null, { onGoogleSignin: signin })(Signin);
