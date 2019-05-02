import React, { Component } from 'react';
import Tilt from 'react-tilt';

class Content extends Component {
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
	render() {
		return (
			<section id="content">
				<Tilt className="Tilt" onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave}  options={{
					scale: 1.05,
					max: 10,
					speed: 1000,
					reverse: false,
					perspective: 1000,
				}}>
					<div className="content">
						<div className="slide left"></div>
					</div>
					<div className="TiltOverlay">
						{this.props.page == 'menu'}
						<h1 onMouseEnter={this.props.onMouseEnterAnimation} onMouseLeave={this.props.onMouseLeaveAnimation}><span>Melquisedeque<br/>Pereira</span><span>Melquisedeque<br/>Pereira</span></h1>
						<h2 onMouseEnter={this.props.onMouseEnterAnimation} onMouseLeave={this.props.onMouseLeaveAnimation}><span>Front-end<br/>Developer</span><span>Front-end<br/>Developer</span></h2>
					</div>
				</Tilt>
			</section>
		);
	}
}

export default Content;
