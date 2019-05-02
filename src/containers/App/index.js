import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleMenu } from '../../actions/menuActions';
import { mouseEnterAnimation, mouseLeaveAnimation, mouseUpAnimation, mouseDownAnimation } from '../../actions/mouseActions';

import Header from '../../components/Header';
import Content from '../../containers/Content';
import Footer from '../../containers/Footer';

import Mouse from '../../components/Mouse.js';

class App extends Component {
	onMouseEnterAnimation = event => {
		this.props.mouseEnterAnimation();
	};
	onMouseLeaveAnimation = event => {
		this.props.mouseLeaveAnimation(false);
		setTimeout(() => {
			this.props.mouseLeaveAnimation(true);
		}, 333);
	};
	onMouseMoveAnimation = event => {
		const mouse = document.querySelector('#mouse');
		mouse.style.left = event.clientX + 'px';
		mouse.style.top  = event.clientY + 'px'; //+ this.scrollTop
		// too slow
		//this.setState({ mousePos: { left: event.clientX + 'px', top: event.clientY + this.scrollTop + 'px' }});
	};
	onMouseDownAnimation = event => {
		this.props.mouseDownAnimation(false);
		setTimeout(() => {
			this.props.mouseDownAnimation(true);
		}, 333);
	};
	/*onMouseUp = event => {
		const mouseAnim = this.state.mouseAnim.filter((i, _class) => _class !== 'clickAnim');
		//setTimeout(() => {
		this.setState({
			mouseAnim: mouseAnim
		});
		//}, 500)
	};*/
	render() {
		return (
			<div className="page" onMouseMove={this.onMouseMoveAnimation} onMouseDown={this.onMouseDownAnimation} onScroll={this.onScrollAnimation}>
				<Mouse animation={this.props.mouse.animation} />
				<Header toggleMenu={this.props.toggleMenu} menuClass={this.props.menu.menuClass} />
				<Content
					onMouseEnterAnimation={this.onMouseEnterAnimation}
					onMouseLeaveAnimation={this.onMouseLeaveAnimation}
				/>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	mouse: state.mouse,
	menu: state.menu
});

export default connect(mapStateToProps, {
	mouseEnterAnimation, mouseLeaveAnimation, mouseDownAnimation, mouseUpAnimation,
	toggleMenu
})(App);

/* todo: remove mouseUpAnimation */