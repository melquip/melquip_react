import React from 'react';
import PropTypes from 'prop-types';
import logo from '../media/svg/logoBlack.png';

const Header = ({ menuClass, toggleMenu, onMouseEnterAnimation, onMouseLeaveAnimation }) => {
	return (
		<header className={menuClass.join(' ')}>
			<div className="inner">
				<div className="hamburguer"
				     onClick={toggleMenu}
				     onMouseEnter={onMouseEnterAnimation}
				     onMouseLeave={onMouseLeaveAnimation}>
					<div /><div /><div />
				</div>
				<a	href="#home"
					className="logo"
					onMouseEnter={onMouseEnterAnimation}
					onMouseLeave={onMouseLeaveAnimation}>
					<img src={logo} alt="Melquip Logo" />
				</a>
			</div>
		</header>
	);
};

Header.propTypes = {
	onMouseEnterAnimation: PropTypes.func.isRequired,
	onMouseLeaveAnimation: PropTypes.func.isRequired,
	menuClass: PropTypes.array.isRequired,
	toggleMenu: PropTypes.func.isRequired
};

export default Header;

/* todo: url to homepage on logo */