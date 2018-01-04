import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class OffCanvas extends Component {
	render() {
		// console.log(this.props)
		const canvasClasses = (this.props.visible) ? `off-canvas off-canvas--visible` : `off-canvas`;
		return(
			<nav className={canvasClasses}>
			  <ul>
			    <li><Link className="off-canvas__link" to="javascript:void(0)">Item 1</Link></li>
			    <li><Link className="off-canvas__link" to="javascript:void(0)">Item 2</Link></li>
			    <li><Link className="off-canvas__link" to="javascript:void(0)">Item 3</Link></li>
			  </ul>
			</nav>
		)
	}
} 

const mapStateToProps = (state) => {
	return {
		offCanvasOpen: state.offCanvas.offCanvasOpen
	}
}

export default OffCanvas;
