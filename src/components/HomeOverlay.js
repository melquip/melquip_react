import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeOverlay = ({ visible }) => {
	return (
		<div id="home" className={["pageContent", "home", (visible?"":"hidden")].join(' ')}>
			<div className="TiltBackground home">
				<div className="slide left"></div>
				<div className="slide right"></div>
			</div>
			<div className="TiltOverlay home">
				<div className="contentOverlay home">
					<Link to="/about">
						<h1 className="hoverSwitchCase invert clickable">
							<span>Melqui<br/>Pereira</span><span>Melqui<br/>Pereira</span>
						</h1>
					</Link>
					<Link to="/work">
						<h2 className="hoverSwitchCase invert clickable">
							<span>Front-end<br/>Developer</span><span>Front-end<br/>Developer</span>
						</h2>
					</Link>
				</div>
			</div>
		</div>
	)
};

HomeOverlay.propTypes = {
	visible: PropTypes.bool.isRequired,
};

export default HomeOverlay;
