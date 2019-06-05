import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../media/svg/logoBlack.png';

import { toggleMenu } from '../actions/menuActions';

const Header = ({ menu }) => {
	const { menuClass, menus } = menu;
	return (
		<header className={menuClass.join(' ')}>
			<div className="inner">
				<ul className="menuInline">
					{
						menus.map((m, i) => <li key={i}>
							<Link to={'/' + m.toLowerCase()} className="hoverSwitchCase clickable">
								<span>{m}</span><span>{m}</span>
							</Link>
						</li>)
					}
				</ul>
				{/*<div className="hamburguer"
				     onClick={menu.toggleMenu}
				     onMouseEnter={onMouseEnterAnimation}
				     onMouseLeave={onMouseLeaveAnimation}>
					<div /><div /><div />
				</div>*/}
				<Link to="/home" className="logo clickable">
					<img src={logo} alt="Melquip Logo" />
				</Link>
			</div>
		</header>
	);
};

Header.propTypes = {
	menu: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
	menu: state.menu
});
export default connect(mapStateToProps, { toggleMenu })(Header);

/*export default Header;*/

