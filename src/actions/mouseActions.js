import {
	MOUSE_ENTER_ANIMATION,
	MOUSE_LEAVE_ANIMATION,
	MOUSE_DOWN_ANIMATION,
	MOUSE_UP_ANIMATION
} from "./types";

export const mouseEnterAnimation = event => dispatch => {
	dispatch({
		type: MOUSE_ENTER_ANIMATION,
		payload: true,//event.target
	})
};
export const mouseLeaveAnimation = removeAll => dispatch => {
	dispatch({
		type: MOUSE_LEAVE_ANIMATION,
		payload: removeAll,//event.target
	})
};
export const mouseDownAnimation = remove => dispatch => {
	dispatch({
		type: MOUSE_DOWN_ANIMATION,
		payload: remove,//event.target
	})
};
export const mouseUpAnimation = event => dispatch => {
	dispatch({
		type: MOUSE_UP_ANIMATION,
		payload: true,//event.target
	})
};