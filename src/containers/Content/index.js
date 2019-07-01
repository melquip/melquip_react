import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tilt from 'react-tilt';
import img from '../../media/img/recent-work-1.png';
import flama from '../../media/img/flamapt.jpg';
import mirandabikeparts from '../../media/img/mirandabikepartscom.jpg';

import { withRouter } from 'react-router';
import {
	goHome,
	goAbout,
	goWork,
} from '../../actions/menuActions';


import MenuOverlay from '../../components/MenuOverlay';
import HomeOverlay from '../../components/HomeOverlay';
import AboutOverlay from '../../components/AboutOverlay';
import WorkOverlay from '../../components/WorkOverlay';

class Content extends Component {
	componentDidMount() {
		// this block allows to change route allowing animations with hidden components from other routes
		this.props.history.listen((location, action) => {
			console.log("on route change", location);
			switch (location.pathname) {
				case '/':
				case '/home':
					this.props.goHome();
					return;
				case '/about':
					this.props.goAbout();
					return;
				case '/work':
					this.props.goWork();
					return;
				default:
					//this.props.goError();
					return;
			}
		});
	}
	render() {
		const { menu } = this.props;
		const slides = [
			{
				id: 1,
				title: "Miranda Bike Parts",
				desc: "Miranda Bike Parts is a website Miranda Bike Parts is a website Miranda Bike Parts is a website Miranda Bike Parts is a website",
				img: mirandabikeparts
			},
			{
				id: 2,
				title: "Flama",
				desc: "Flama is a website Flama is a website Flama is a website Flama is a website",
				img: flama
			},
			{
				id: 3,
				title: "Agenda Urbana",
				desc: "Agenda Urbana is a website Agenda Urbana is a website Agenda Urbana is a website Agenda Urbana is a website",
				img: img
			},
			{
				id: 4,
				title: "AMTSM",
				desc: "AMTSM is a website AMTSM is a website AMTSM is a website AMTSM is a website",
				img: img
			},
			{
				id: 5,
				title: "Miranda Bike Parts",
				desc: "Miranda Bike Parts is a website Miranda Bike Parts is a website Miranda Bike Parts is a website Miranda Bike Parts is a website",
				img: mirandabikeparts
			},
		];
		return (
			<section id="content">
				<Tilt className="Tilt" options={{
					scale: 1,
					max: 7,
					speed: 800,
					reverse: false,
					perspective: 1000,
					reset: true
				}}>
					<HomeOverlay visible={menu.page === 'home'} />
					<MenuOverlay visible={menu.page === 'menu'} menus={menu.menus}/>
					<AboutOverlay visible={menu.page === 'about'} />
					<WorkOverlay visible={menu.page === 'work'} slides={slides} />
				</Tilt>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	menu: state.menu
});
export default withRouter(connect(mapStateToProps, {
	goHome,
	goAbout,
	goWork
})(Content));

//export default Content;

/* SLIDE MOVES ON MOUSE MOVE */
/*
<Tilt  onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave} />
onMouseMove = event => {
	const slide = document.querySelector('.content .slide.left');
	slide.classList.remove('smooth'); // dont css animate
	// parent
	const parent = document.querySelector('.content');
	const halfWindow = parent.offsetWidth / 2;
	// distance from window 0 left to element
	const offsetParentCSS = parent.offsetLeft;
	// calculate value
    let slideOffset = -event.clientX + offsetParentCSS + halfWindow;
	//console.dir('x', event.clientX, 'left', 80, 'halfWindow', halfWindow);
	// set css
	slide.style.left = `${slideOffset}px`;
};
onMouseLeave = event => {
	const slide = document.querySelector('.content .slide.left');
	slide.classList.add('smooth');
	slide.removeAttribute('style');
};
*/