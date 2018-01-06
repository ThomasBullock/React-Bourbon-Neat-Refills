import React, { Component } from 'react';

class Navigation extends Component {
	render(){
		return(
			<header className="navigation" role="banner">
			  <div className="navigation__wrapper">
			    <a href="javascript:void(0)" className="logo">
			      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="Logo Image"/>
			    </a>
			    <a href="javascript:void(0)" className="navigation__menu-button" id="js-mobile-menu">MENU</a>
			    <nav role="navigation">
			      <ul id="js-navigation-menu" className="navigation__menu show">
			        <li className="navigation__link"><a href="javascript:void(0)">Products</a></li>
			        <li className="navigation__link"><a href="javascript:void(0)">About Us</a></li>
			        <li className="navigation__link"><a href="javascript:void(0)">Contact</a></li>
			        <li id="js-navigation-more" className="navigation__link navigation__link--more"><a href="javascript:void(0)">More</a>
			          <ul className="submenu">
			            <li><a href="javascript:void(0)">Submenu Item</a></li>
			            <li><a href="javascript:void(0)">Another Item</a></li>
			            <li className="more"><a href="javascript:void(0)">Item with submenu</a>
			              <ul className="navigation__submenu">
			                <li><a href="javascript:void(0)">Sub-submenu Item</a></li>
			                <li><a href="javascript:void(0)">Another Item</a></li>
			              </ul>
			            </li>
			            <li className="more"><a href="javascript:void(0)">Another submenu</a>
			              <ul className="submenu">
			                <li><a href="javascript:void(0)">Sub-submenu</a></li>
			                <li><a href="javascript:void(0)">An Item</a></li>
			              </ul>
			            </li>
			          </ul>
			        </li>
			      </ul>
			    </nav>
			    <div className="navigation-tools">
			      <div className="search-bar">
			        <form role="search">
			          <input type="search" placeholder="Enter Search" />
			          <button type="submit">
			            <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon.png" alt="Search Icon"/>
			          </button>
			        </form>
			      </div>
			    </div>
			  </div>
			</header>		
		)
	}
}

export default Navigation;
