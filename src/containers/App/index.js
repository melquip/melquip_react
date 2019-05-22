import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleMenu } from '../../actions/menuActions';
import { mouseEnterAnimation, mouseLeaveAnimation, mouseUpAnimation, mouseDownAnimation } from '../../actions/mouseActions';

import Content from '../../containers/Content';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Mouse from '../../components/Mouse';

class App extends Component {
	componentDidMount() {
		document.body.addEventListener('mousemove', this.onMouseMoveAnimation);
		document.body.addEventListener('mousedown', this.onMouseDownAnimation);
    }
    componentWillUnmount() {
		document.body.removeEventListener('mousemove', this.onMouseMoveAnimation);
		document.body.removeEventListener('mousedown', this.onMouseDownAnimation);
    }
	onMouseEnterAnimation = event => {
		this.props.mouseEnterAnimation();
	};
	onMouseLeaveAnimation = event => {
		this.props.mouseLeaveAnimation();
		/*setTimeout(() => {
			this.props.mouseLeaveAnimation(true);
		}, 333);*/
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
	render() {
		const { mouse, menu } = this.props;
		return (
			<React.Fragment>
				{/*<div className="page" onMouseMove={this.onMouseMoveAnimation} onMouseDown={this.onMouseDownAnimation}>*/}
				<Mouse animation={mouse.animation} />
				<Header
					onMouseEnterAnimation={this.onMouseEnterAnimation}
					onMouseLeaveAnimation={this.onMouseLeaveAnimation}
					toggleMenu={this.props.toggleMenu}
					menuClass={menu.menuClass}
				/>
				<Content
					onMouseEnterAnimation={this.onMouseEnterAnimation}
					onMouseLeaveAnimation={this.onMouseLeaveAnimation}
					page={menu.page}
				/>
				<Footer
					onMouseEnterAnimation={this.onMouseEnterAnimation}
					onMouseLeaveAnimation={this.onMouseLeaveAnimation}
				/>
				{/*</div>*/}
			</React.Fragment>
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