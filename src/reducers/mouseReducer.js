import {
	MOUSE_ENTER_ANIMATION,
	MOUSE_LEAVE_ANIMATION,
	MOUSE_UP_ANIMATION,
	MOUSE_DOWN_ANIMATION
} from "../actions/types";

const initialState = {
	animation: [],
};

export default function(state = initialState, action) {
	let mouseClasses;
	switch (action.type) {
		case MOUSE_ENTER_ANIMATION:
			mouseClasses = state.animation.filter((c, i) => c !== 'enterAnim' && c !== 'leaveAnim');
			return {
				...state,
				animation: [...mouseClasses, 'enterAnim']
			};
		case MOUSE_LEAVE_ANIMATION:
			mouseClasses = state.animation.filter((c, i) => c !== 'enterAnim' && c !== 'leaveAnim');
			if(action.payload !== true) {
				mouseClasses.push('leaveAnim');
			}
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
		default:
			return state;
	}
	
}