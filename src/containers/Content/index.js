import React, { Component } from 'react';
import Tilt from 'react-tilt';

import MenuOverlay from '../../components/MenuOverlay';
import HomeOverlay from '../../components/HomeOverlay';
import WorkOverlay from "../../components/WorkOverlay";

class Content extends Component {
	
	render() {
		const { onMouseEnterAnimation, onMouseLeaveAnimation, page } = this.props;
		const slides = [
			{
				id: 1,
				title: "Miranda Bike Parts",
				desc: "Miranda Bike Parts is a website Miranda Bike Parts is a website Miranda Bike Parts is a website Miranda Bike Parts is a website"
			},
			{
				id: 2,
				title: "Flama",
				desc: "Flama is a website Flama is a website Flama is a website Flama is a website"
			},
			{
				id: 3,
				title: "Agenda Urbana",
				desc: "Agenda Urbana is a website Agenda Urbana is a website Agenda Urbana is a website Agenda Urbana is a website"
			},
			{
				id: 4,
				title: "AMTSM",
				desc: "AMTSM is a website AMTSM is a website AMTSM is a website AMTSM is a website"
			}
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
					<HomeOverlay visible={page == 'home'} onMouseEnterAnimation={onMouseEnterAnimation} onMouseLeaveAnimation={onMouseLeaveAnimation} />
					<MenuOverlay visible={page == 'menu'} onMouseEnterAnimation={onMouseEnterAnimation} onMouseLeaveAnimation={onMouseLeaveAnimation} />
					<WorkOverlay slides={slides} visible={page == 'work'} onMouseEnterAnimation={onMouseEnterAnimation} onMouseLeaveAnimation={onMouseLeaveAnimation} />
				</Tilt>
			</section>
		);
	}
}

export default Content;


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