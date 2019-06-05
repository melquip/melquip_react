import {
	MENU_TOGGLE, MENU_HOME, MENU_ABOUT, MENU_WORK
} from "./types";

export const toggleMenu = event => dispatch => {
	dispatch({
		type: MENU_TOGGLE,
		payload: true,
	})
};
export const goHome = event => dispatch => {
	console.log('dispatch: goHome()');
	dispatch({
		type: MENU_HOME,
		payload: true,
	})
};
export const goWork = event => dispatch => {
	console.log('dispatch: goWork()');
	dispatch({
		type: MENU_WORK,
		payload: true,
	})
};