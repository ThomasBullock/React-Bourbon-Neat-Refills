import React, { Component } from 'react';

class VerticalDotNav extends Component {
	render() {
		return (
			<nav className="vertical">
				<div className="vertical__nav">
					<ul>
						<li className="vertical__item vertical__item--selected" />
						<li className="vertical__item" />
						<li className="vertical__item" />
						<li className="vertical__item" />
					</ul>
				</div>
			</nav>
		);
	}
}

export { VerticalDotNav };
