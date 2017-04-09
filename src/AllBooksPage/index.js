import React from 'react';
import api from '../api';

export default React.createClass({
	getInitialState() {
		return {
			books: {},
		};
	},

	componentDidMount() {
		this.booksSubscribtion = api
			.getBooks()
			.filter(Boolean)
			.subscribe(books => {
				this.setState({
					books,
				});
			});
	},

	componentWillUnmount() {
		this.booksSubscribtion.unsubscribe();
	},

	render() {
		const { books } = this.state;
		const list = Object.keys(books).map(k => ({ key: k, ...books[k] }));

		return (
			<div>
				<h1>All Books</h1>

				<ul
					style={{
						marginTop: 20,
						display: 'flex',
						flexFlow: 'row wrap',
						listStyle: 'none',
					}}
				>
					{list.map(({ key, image, title }) => (
						<li key={key} style={{ marginRight: 20 }}>
							<img src={image} alt={title} />
						</li>
					))}
				</ul>
			</div>
		);
	},
});
