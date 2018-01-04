import { combineReducers } from 'redux';
import loading from './loading';
import offCanvas from './offCanvas';

const rootReducer = combineReducers({
	loading,
	offCanvas
});

export default rootReducer;