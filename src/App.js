import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/css/styles.css';
import { Switch, OffCanvas, FadeScreen, AccordionTabs, VerticalDotNav, FullPageSection, VerticalTabs } from './components/common';

import { connect } from 'react-redux';

import {
	offCanvasToggle,
} from './ducks/offCanvas';

import {
	tabSelect
} from './ducks/accordionTabs';

class App extends Component {

	render() {
		return (
			<div className="App">
				<AccordionTabs tabs={this.props.accordionTabs} selectHandler={this.props.tabSelect}/>
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
					<VerticalTabs />
				</FullPageSection>
				<FullPageSection>
					<h1>Yo Me Section</h1>
					<Switch switchHandler={this.props.offCanvasToggle} />
				</FullPageSection>       
			</div>
		);
	}
}

const tabs = [
	{
		title: "Bombers",
		content: "Not everyone’s a hypocrite. Some of us will pour one out for the late Flo Bjelke-Petersen, purely to send the old witch down to whatever level of hell currently plays host to the tormented shade of her unlamented husband, Sir Joh, the last of the hillbilly dictators.",
		visible: false,		
	},
	{
		title: "Magpies",
		content: "If ever you needed another reason to stoke your contempt for the top hatted muppet currently impersonating a Prime Minister (spoiler, I know you don’t) Mycroft Trumble’s dewy eyed tweet in praise of Lady Flo this week was just the ticket.",
		visible: true,		
	}
]

const mapStateToProps = (state, props) => {
	console.log(state, props);
	return {
		offCanvasOpen: state.offCanvas.offCanvasOpen,
		loading: state.loading,
		accordionTabs: state.accordionTabs,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		offCanvasToggle: () => dispatch(offCanvasToggle()),
		tabSelect: (tab) => dispatch(tabSelect(tab)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
