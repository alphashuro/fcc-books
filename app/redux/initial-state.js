export default {
	auth: {
		user: null,
		loading: false,
		error: null,
	},
	profile: {
		name: '',
		city: '',
		state: '',
		error: '',
		loading: false,
	},
	books: {
		loading: false,
		all: [],
		mine: [],
		error: null,
	},
	trades: {
		loading: false,
		incoming: [],
		outgoing: [],
		error: null,
	},
};
