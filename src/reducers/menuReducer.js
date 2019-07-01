import {
	MENU_HOME,
	MENU_ABOUT,
	MENU_WORK,
	MENU_TOGGLE
} from "../actions/types";

let firstPage = window.location.pathname.split('/')[1];
if(window.location.pathname === '/') {
	firstPage = 'home';
}

const initialState = {
	prevPage: firstPage,
	page: firstPage,
	menuOpen: false,
	menuClass: [], 
	menus: ['About', 'Work']
};

export default function (state = initialState, action = MENU_HOME) {
	let menuClasses;
	//console.log("MENU REDUCER", action.type);
	switch (action.type) {
		case MENU_HOME:
			return {
				...state,
				prevPage: state.page,
				page: 'home',
			};
		case MENU_ABOUT:
			return {
				...state,
				prevPage: state.page,
				page: 'about',
			};
		case MENU_WORK:
			return {
				...state,
				prevPage: state.page,
				page: 'work',
			};
		case MENU_TOGGLE:
			menuClasses = state.menuClass.filter((c, i) => c !== 'menu-open');
			if(!state.menuOpen) {
				menuClasses.push('menu-open');
			}
			return {
				...state,
				menuOpen: !state.menuOpen,
				menuClass: [...menuClasses],
				prevPage: state.page,
				page: (!state.menuOpen ? 'menu' : state.prevPage),
			};
		default: return state;
	}
}