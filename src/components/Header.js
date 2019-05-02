import React from 'react';
import PropTypes from 'prop-types';
import logo from '../media/svg/logoWhite.png';

const Header = ({ menuClass, toggleMenu }) => {
	return (
		<header className={menuClass.join(' ')}>
			<div className="inner">
				<div className="hamburguer" onClick={toggleMenu}><div /><div /><div /></div>
				<a href="#home" className="logo"><img src={logo} alt="Melquip Logo" /></a>
			</div>
		</header>
	);
};

Header.propTypes = {
	menuClass: PropTypes.array.isRequired,
	toggleMenu: PropTypes.func.isRequired
};

export default Header;

/* todo: url to homepage on logo */