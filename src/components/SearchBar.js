import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return(
			<form className="search-bar" role="search">
			  <input className="search-bar__input" type="search" placeholder="Enter Search" />
			  <button className="search-bar__btn" type="submit">
			    <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon-black.png" alt="Search Icon"/>
			  </button>
			</form>
		)
	}
}

export default SearchBar; 