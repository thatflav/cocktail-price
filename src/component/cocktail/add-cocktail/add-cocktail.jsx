import React, { Component } from 'react';
import { BASE_URL } from '../constant';
import axios from 'axios';

class AddCocktail extends Component {
	constructor(props) {
		super(props);
		this.somethingElse = null;
		this.pushCocktail = this.pushCocktail.bind(this);
	}

	async pushCocktail() {
		try {
			await axios.post(
				`${BASE_URL}cocktail`,
				{
					name: this.somethingElse.value
				},
				{
					'Content-Type': 'application/json'
				}
			);
			this.props.fbi(this.somethingElse.value);
		} catch (e) {}
	}

	render() {
		return (
			<p>
				<input ref={(qwe) => (this.somethingElse = qwe)} />
				<button onClick={this.pushCocktail}>Don't touch me!</button>
			</p>
		);
	}
}

export default AddCocktail;
