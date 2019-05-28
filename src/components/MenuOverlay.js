import React from 'react';
import PropTypes from 'prop-types';

const MenuOverlay = ({ visible, menus }) => {
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
							menus.map((menu, i) =>
								<li key={i}>
									<a href={'#' + menu.toLowerCase()} className="hoverSwitchCase clickable">
										<span>{menu}</span><span>{menu}</span>
									</a>
								</li>
							)
						}
					</ul>
				</div>
			</div>
		</div>
	)
};

MenuOverlay.propTypes = {
	menus: PropTypes.array.isRequired,
	visible: PropTypes.bool.isRequired,
};

export default MenuOverlay;
