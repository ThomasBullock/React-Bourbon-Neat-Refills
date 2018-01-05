import React, { Component } from 'react';

class VerticalDotNav extends Component {
	render() {
		return(
			<nav className="vertical">
				<div className="vertical__nav">
					<ul>
						<li className="vertical__item vertical__item--selected"></li>
						<li className="vertical__item"></li>
						<li className="vertical__item"></li>
						<li className="vertical__item"></li>						
					</ul>
				</div>
			</nav>
		)
	}
}

export default VerticalDotNav; 