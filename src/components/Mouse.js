import React from 'react';
import PropTypes from 'prop-types';

const Mouse = ({ animation }) => <div id="mouse" className={animation.join(' ')} />;

Mouse.propTypes = {
	animation: PropTypes.array.isRequired
};

export default Mouse;
