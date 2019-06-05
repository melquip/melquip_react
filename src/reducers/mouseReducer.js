import {
	MOUSE_ENTER_ANIMATION,
	MOUSE_LEAVE_ANIMATION,
	MOUSE_DOWN_ANIMATION,
	MOUSE_GO_WHITE,
	MOUSE_GO_BLACK
} from "../actions/types";

const initialState = {
	animation: [],
};

export default function(state = initialState, action) {
	let mouseClasses;
	//console.log("MOUSE REDUCER!", action.type);
	switch (action.type) {
		case MOUSE_GO_WHITE:
			mouseClasses = state.animation.filter((c, i) => c !== 'white');
			return {
				...state,
				animation: [...mouseClasses, 'white']
			};
		case MOUSE_GO_BLACK:
			mouseClasses = state.animation.filter((c, i) => c !== 'white');
			return {
				...state,
				animation: [...mouseClasses]
			};
		case MOUSE_ENTER_ANIMATION:
			mouseClasses = state.animation.filter((c, i) => c !== 'enterAnim' && c !== 'leaveAnim');
			return {
				...state,
				animation: [...mouseClasses, 'enterAnim']
			};
		case MOUSE_LEAVE_ANIMATION:
			mouseClasses = state.animation.filter((c, i) => c !== 'enterAnim' && c !== 'leaveAnim');
			return {
				...state,
				animation: [...mouseClasses]
			};
		case MOUSE_DOWN_ANIMATION:
			mouseClasses = state.animation.filter((c, i) => c !== 'clickAnim');
			if(action.payload !== true) {
				mouseClasses.push('clickAnim');
			}
			return {
				...state,
				animation: [...mouseClasses]
			};
		default: return state;
	}
}