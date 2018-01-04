import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/css/styles.css';
import Switch from './components/Switch';
import OffCanvas from './components/OffCanvas';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  offCanvasToggle
} from './ducks/offCanvas';

const actionCreators = {

}

class App extends Component {

  render() {
    console.log(this.props.openOffCanvas)
    return (
      <div className="App">
        <OffCanvas visible={this.props.offCanvasOpen}/>
        <header className="App-header">
          <Switch />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={ {'position': 'absolute', 'right': 0}  } onClick={this.props.offCanvasToggle}>Menu</button>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state, props)
  return {
    offCanvasOpen: state.offCanvas.offCanvasOpen,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
    // console.log(dispatch);
  // return bindActionCreators(actionCreators, dispatch);    
  return {
    offCanvasToggle: () => dispatch(offCanvasToggle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
