import { combineReducers } from 'redux';
import mouseReducer from './mouseReducer';
import menuReducer from './menuReducer';

export default combineReducers({
	mouse: mouseReducer,
	menu: menuReducer
});