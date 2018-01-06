import React, { Component } from 'react';

class FullPageSection extends Component {
	render() {
		return (
			<section style={styles} className="fullpage">
				{this.props.children}
			</section>
		);
	}
}

const styles = {
	background: '#FF0',
};

export { FullPageSection };
