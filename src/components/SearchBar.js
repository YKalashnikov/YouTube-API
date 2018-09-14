import React, { Component } from 'react';
import logo from "../youtube-logo.png";
import './SearchBar.css';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { search: '' };
	}
	onInputChange(search) {
		this.setState({ search });
		this.props.onSearchTermChange(search);
	}
	render() {
		return (
			<div className="block">
				
				<div className="searchBar">
				<a href='https://www.youtube.com/'>
				<img className='logo' src={logo} alt='' />
				</a>
					<input
						className="input"
						type="text"
						placeholder="Search a video..."
						value={this.state.search}
						onChange={e => this.onInputChange(e.target.value)}
					/>
				</div>
			</div>
		);
	}

	
}
