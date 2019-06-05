import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import { mouseEnterAnimation, mouseLeaveAnimation, mouseDownAnimation, mouseGoWhite, mouseGoBlack } from '../../actions/mouseActions';

import Content from '../../containers/Content';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Mouse from '../../components/Mouse';

class App extends Component {
	componentDidMount() {
		document.body.addEventListener('mousemove', this.onMouseMoveAnimation);
		document.body.addEventListener('mousedown', this.props.mouseDownAnimation);
		let clickables = document.body.getElementsByClassName('clickable');
		for (let i = 0; i < clickables.length; i++) {
			clickables[i].addEventListener('mouseenter', this.props.mouseEnterAnimation);
			clickables[i].addEventListener('mouseleave', this.props.mouseLeaveAnimation);
		}
		//let tiltContent = document.getElementById('content');
		//tiltContent.addEventListener('mouseenter', this.props.mouseGoWhite);
		//tiltContent.addEventListener('mouseleave', this.props.mouseGoBlack);
    }
    componentWillUnmount() {
		document.body.removeEventListener('mousemove', this.onMouseMoveAnimation);
		document.body.removeEventListener('mousedown', this.props.mouseDownAnimation);
	    let clickables = document.body.getElementsByClassName('clickable');
	    for (let i = 0; i < clickables.length; i++) {
            clickables[i].removeEventListener('mouseenter', this.props.mouseEnterAnimation);
            clickables[i].removeEventListener('mouseleave', this.props.mouseLeaveAnimation);
        }
	    //let tiltContent = document.getElementById('content');
	    //tiltContent.removeEventListener('mouseenter', this.props.mouseGoWhite);
        //tiltContent.removeEventListener('mouseleave', this.props.mouseGoBlack);
    }
	onMouseMoveAnimation = event => {
		const mouse = document.querySelector('#mouse');
		mouse.style.left = event.clientX + 'px';
		mouse.style.top  = event.clientY + 'px'; //+ this.scrollTop
		// too slow
		//this.setState({ mousePos: { left: event.clientX + 'px', top: event.clientY + this.scrollTop + 'px' }});
	};
	render() {
		const { mouse } = this.props;
		return (
			<BrowserRouter>
				<Mouse animation={mouse.animation} />
				<Header />
				<Content />
				<Footer />
			</BrowserRouter>
		)
	}
}

const mapStateToProps = state => ({
	mouse: state.mouse,
	menu: state.menu
});

export default connect(mapStateToProps, {
	mouseEnterAnimation, mouseLeaveAnimation, mouseDownAnimation, mouseGoWhite, mouseGoBlack
})(App);

/*
<div className="page" onMouseMove={this.onMouseMoveAnimation} onMouseDown={this.props.mouseDownAnimation}>
</div>
*/