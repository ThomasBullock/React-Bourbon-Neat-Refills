import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/css/styles.css';
import { Switch, OffCanvas, FadeScreen, AccordionTabs, VerticalDotNav, FullPageSection } from './components/common';

import { connect } from 'react-redux';

import {
	offCanvasToggle,
} from './ducks/offCanvas';


class App extends Component {

	render() {
		console.log(this.props.openOffCanvas);
		return (
			<div className="App">
				<AccordionTabs />
				<VerticalDotNav />
				<OffCanvas visible={this.props.offCanvasOpen} />
				<FadeScreen visible={this.props.offCanvasOpen} switchHandler={this.props.offCanvasToggle} />
				<header className="App-header">
					<Switch switchHandler={this.props.offCanvasToggle} />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<button style={{ 'position': 'absolute', 'top':'5px', 'right': 0 }} onClick={this.props.offCanvasToggle}>Menu</button>
				<FullPageSection>
					<h1>Yo Me Section</h1>
					<Switch switchHandler={this.props.offCanvasToggle} />
				</FullPageSection>
				<FullPageSection>
					<h1>Yo Me Section</h1>
					<Switch switchHandler={this.props.offCanvasToggle} />
				</FullPageSection>       
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	console.log(state, props);
	return {
		offCanvasOpen: state.offCanvas.offCanvasOpen,
		loading: state.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		offCanvasToggle: () => dispatch(offCanvasToggle()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
