import React from 'react';
import PropTypes from 'prop-types';
import logo from '../media/svg/logoBlack.png';

const Header = ({ menus, menuClass, toggleMenu }) => {
	return (
		<header className={menuClass.join(' ')}>
			<div className="inner">
				<ul className="menuInline">
					{
						menus.map((menu, i) => <li key={i}>
							<a href={'#' + menu.toLowerCase()}
							   className="hoverSwitchCase clickable">
								<span>{menu}</span><span>{menu}</span>
							</a>
						</li>)
					}
				</ul>
				{/*<div className="hamburguer"
				     onClick={toggleMenu}
				     onMouseEnter={onMouseEnterAnimation}
				     onMouseLeave={onMouseLeaveAnimation}>
					<div /><div /><div />
				</div>*/}
				<a	href="#home"
					className="logo clickable">
					<img src={logo} alt="Melquip Logo" />
				</a>
			</div>
		</header>
	);
};

Header.propTypes = {
	menus: PropTypes.array.isRequired,
	menuClass: PropTypes.array.isRequired,
	toggleMenu: PropTypes.func.isRequired
};

export default Header;

/* todo: url to homepage on logo */