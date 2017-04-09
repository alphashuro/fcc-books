import React from 'react';
import { RaisedButton, AutoComplete, MenuItem } from 'material-ui';
import api from '../api';

export default React.createClass({
	getInitialState() {
		return {
			booksAutoComplete: [],
			selectedBook: null,
			myBooks: {},
		};
	},

	componentDidMount() {
		this.booksSubscribtion = api.getMyBooks().subscribe(books => {
			this.setState({
				myBooks: books,
			});
		});
	},

	componentWillUnmount() {
		this.booksSubscribtion.unsubscribe();
	},

	async search(text) {
		const response = await api.searchBook(text);
		const data = await response.json();

		if (!data.items) return;

		const books = data.items.map(book);

		function book({ volumeInfo: { title, imageLinks } }) {
			return {
				title,
				text: title,
				image: imageLinks && imageLinks.thumbnail,
				value: (
					<MenuItem
						primaryText={title}
						secondaryText={
							imageLinks &&
								<img
									src={imageLinks.thumbnail}
									height={40}
									alt={`Thumbnail of ${title}`}
								/>
						}
					/>
				),
			};
		}

		this.setState({ booksAutoComplete: books || [] });
	},

	selectBook({ title, image }) {
		this.setState({ selectedBook: { title, image } });
	},

	async add() {
		const book = this.state.selectedBook;

		await api.addBook(book);
	},

	render() {
		const { myBooks } = this.state;
		const list = Object.keys(myBooks).map(k => ({ key: k, ...myBooks[k] }));

		return (
			<div>
				<h1>My Books</h1>
				<div style={{ width: 400 }}>
					<AutoComplete
						hintText="Search for some book"
						dataSource={this.state.booksAutoComplete}
						openOnFocus={true}
						onUpdateInput={this.search}
						fullWidth={true}
						onNewRequest={this.selectBook}
					/>
				</div>

				<RaisedButton label="Add" onClick={this.add} />
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
