import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

const Footer = ( ) => {
	return (
		<footer>
			<div className="inner">
				<div className="flex three">
					<div className="column">&nbsp;</div>
					<div className="column">
						<Link to="/hireme" className="hoverSwitchCase invert clickable"><span>Hire me</span><span>Hire me</span></Link>
					</div>
					<div className="column">&copy; 2019 Developed by Melqui</div>
				</div>
			</div>
		</footer>
	);
};

/*
Footer.propTypes = {

};
*/

export default Footer;
