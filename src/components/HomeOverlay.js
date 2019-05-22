import React from 'react';
import PropTypes from 'prop-types';

const HomeOverlay = ({ visible, onMouseEnterAnimation, onMouseLeaveAnimation }) => {
	return (
		<div id="home" className={["pageContent", "home", (visible?"":"hidden")].join(' ')}>
			<div className="TiltBackground home">
				<div className="slide left"></div>
				<div className="slide right"></div>
			</div>
			<div className="TiltOverlay home">
				<div className="contentOverlay home">
					<h1 className="hoverSwitchCase"
					    onMouseEnter={onMouseEnterAnimation}
					    onMouseLeave={onMouseLeaveAnimation}>
						<span>Melquisedeque<br/>Pereira</span>
						<span>Melquisedeque<br/>Pereira</span>
					</h1>
					<h2 className="hoverSwitchCase"
					    onMouseEnter={onMouseEnterAnimation}
					    onMouseLeave={onMouseLeaveAnimation}>
						<span>Front-end<br/>Developer</span>
						<span>Front-end<br/>Developer</span>
					</h2>
				</div>
			</div>
		</div>
	)
};

HomeOverlay.propTypes = {
	visible: PropTypes.bool.isRequired,
	onMouseEnterAnimation: PropTypes.func.isRequired,
	onMouseLeaveAnimation: PropTypes.func.isRequired
};

export default HomeOverlay;
