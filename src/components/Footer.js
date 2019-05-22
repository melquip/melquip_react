import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ onMouseEnterAnimation, onMouseLeaveAnimation }) => {
	return (
		<footer>
			<div className="inner">
				<div className="flex three">
					<div className="column">
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
					<div className="column"><a href="#">Hire me</a></div>
					<div className="column">&copy; 2019 Developed by Melqui</div>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	onMouseEnterAnimation: PropTypes.func.isRequired,
	onMouseLeaveAnimation: PropTypes.func.isRequired
};

export default Footer;
