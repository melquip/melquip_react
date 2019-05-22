import React from 'react';
import PropTypes from 'prop-types';

const MenuOverlay = ({ visible, onMouseEnterAnimation, onMouseLeaveAnimation }) => {
	const menus = ['About Me', 'My Work', 'Hire Me'];
	return (
		<div id="menu" className={["pageContent", "menu", (visible?"":"hidden")].join(' ')}>
			<div className="TiltBackground menu">
				<div className="slide left"></div>
				<div className="slide right"></div>
			</div>
			<div className="TiltOverlay menu">
				<div className="contentOverlay menu">
				{/*<div className={['contentOverlay', 'menu', (visible ? null : 'hidden')].join(' ')}>*/}
					<ul>
						{
							menus.map((menu, i) => <li
								key={i}
								onMouseEnter={onMouseEnterAnimation}
								onMouseLeave={onMouseLeaveAnimation}>
								<a href="#" className="hoverSwitchCase">
									<span>{menu}</span><span>{menu}</span>
								</a>
							</li>)
						}
					</ul>
				</div>
			</div>
		</div>
	)
};

MenuOverlay.propTypes = {
	visible: PropTypes.bool.isRequired,
	onMouseEnterAnimation: PropTypes.func.isRequired,
	onMouseLeaveAnimation: PropTypes.func.isRequired
};

export default MenuOverlay;
