import React from 'react';
import PropTypes from 'prop-types';

const HomeOverlay = ({ visible }) => {
	return (
		<div id="home" className={["pageContent", "home", (visible?"":"hidden")].join(' ')}>
			<div className="TiltBackground home">
				<div className="slide left"></div>
				<div className="slide right"></div>
			</div>
			<div className="TiltOverlay home">
				<div className="contentOverlay home">
					<h1 className="hoverSwitchCase invert clickable">
						<span>Melqui<br/>Pereira</span><span>Melqui<br/>Pereira</span>
					</h1>
					<h2 className="hoverSwitchCase invert clickable">
						<span>Front-end<br/>Developer</span><span>Front-end<br/>Developer</span>
					</h2>
				</div>
			</div>
		</div>
	)
};

HomeOverlay.propTypes = {
	visible: PropTypes.bool.isRequired,
};

export default HomeOverlay;
