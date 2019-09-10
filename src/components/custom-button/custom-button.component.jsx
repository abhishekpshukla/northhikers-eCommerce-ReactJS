import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-signed-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
};

export default CustomButton;