import React from 'react';
import './Button.scss';

// inverted
//default
//google sign in

const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted',
};
const Button = ({ children, buttonType, ...rest }) => {
	return (
		<>
			<button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...rest}>
				{children}
			</button>
		</>
	);
};

export default Button;
