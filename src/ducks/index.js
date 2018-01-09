import { combineReducers } from 'redux';
import loading from './loading';
import offCanvas from './offCanvas';
import accordionTabs from './accordionTabs';

const rootReducer = combineReducers({
	loading,
	offCanvas,
	accordionTabs,
});

export default rootReducer;