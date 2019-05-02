import {
	MENU_TOGGLE
} from "../actions/types";

const initialState = {
	menuOpen: false,
	menuClass: []
};

export default function(state = initialState, action) {
	let menuClasses;
	switch (action.type) {
		case MENU_TOGGLE:
			menuClasses = state.menuClass.filter((c, i) => c !== 'menu-open');
			if(!state.menuOpen) {
				menuClasses.push('menu-open')
			}
			return {
				...state,
				menuOpen: !state.menuOpen,
				menuClass: [...menuClasses]
			};
		default:
			return state;
	}
	
}