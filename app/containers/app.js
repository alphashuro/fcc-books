import { connect} from 'react-redux';
import App from '../components/app';

const AppContainer = connect(
	state => ({
		loggedIn: state.auth.user,
	})
)(App);

AppContainer.displayName = 'App';

export default AppContainer;
