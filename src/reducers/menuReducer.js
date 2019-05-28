import {
	MENU_WORK,
	MENU_TOGGLE
} from "../actions/types";

const initialState = {
	prevPage: 'home',
	page: 'home',
	menuOpen: false,
	menuClass: []
};

export default function(state = initialState, action) {
	let menuClasses;
	switch (action.type) {
		case MENU_WORK:
			return {
				...state,
				prevPage: state.page,
				page: 'work',
			};
		case MENU_TOGGLE:
			menuClasses = state.menuClass.filter((c, i) => c !== 'menu-open');
			if(!state.menuOpen) {
				menuClasses.push('menu-open')
			}
			return {
				...state,
				menuOpen: !state.menuOpen,
				menuClass: [...menuClasses],
				prevPage: state.page,
				page: (!state.menuOpen ? 'menu' : state.prevPage),
			};
		default:
			return state;
	}
	
}