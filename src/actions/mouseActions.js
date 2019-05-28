import {
	MOUSE_ENTER_ANIMATION,
	MOUSE_LEAVE_ANIMATION,
	MOUSE_DOWN_ANIMATION,
	MOUSE_GO_WHITE,
	MOUSE_GO_BLACK,
} from "./types";

export const mouseGoWhite = event => dispatch => {
	dispatch({
		type: MOUSE_GO_WHITE,
		payload: true,
	})
};
export const mouseGoBlack = event => dispatch => {
	dispatch({
		type: MOUSE_GO_BLACK,
		payload: true,
	})
};
export const mouseEnterAnimation = event => dispatch => {
	dispatch({
		type: MOUSE_ENTER_ANIMATION,
		payload: true,//event.target
	})
};
export const mouseLeaveAnimation = event => dispatch => {
	dispatch({
		type: MOUSE_LEAVE_ANIMATION,
		payload: true,//event.target
	})
};
export const mouseDownAnimation = event => dispatch => {
	dispatch({
		type: MOUSE_DOWN_ANIMATION,
		payload: false,//event.target
	});
	setTimeout(() => {
		dispatch({
			type: MOUSE_DOWN_ANIMATION,
			payload: true,//event.target
		})
	}, 333);
};
