import {
	MENU_TOGGLE, MENU_WORK
} from "./types";

export const toggleMenu = event => dispatch => {
	dispatch({
		type: MENU_TOGGLE,
		payload: true,
	})
};
export const goWork = event => dispatch => {
	dispatch({
		type: MENU_WORK,
		payload: true,
	})
};