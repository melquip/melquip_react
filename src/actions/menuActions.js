import {
	MENU_TOGGLE
} from "./types";

export const toggleMenu = event => dispatch => {
	dispatch({
		type: MENU_TOGGLE,
		payload: true,
	})
};