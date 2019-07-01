import React from 'react';
import PropTypes from 'prop-types';
import aboutBG from '../media/img/mirandabikepartscom.jpg';

const AboutOverlay = ({ visible }) => {
	return (
		<div id="about" className={["pageContent", "about", (visible?"":"hidden")].join(' ')}>
			<div className="TiltBackground">
				<div className="slide left">
				</div>
				<div className="slide right">
					<img src={aboutBG} alt=""/>
				</div>
			</div>
			<div className="TiltOverlay">
				<div className="contentOverlay">
					<h1>About me</h1>
					<p></p>
					<p></p>
					<p></p>
					<p></p>
				</div>
			</div>
		</div>
	)
};

AboutOverlay.propTypes = {
	visible: PropTypes.bool.isRequired,
};

export default AboutOverlay;
