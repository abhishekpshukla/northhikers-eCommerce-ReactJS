//  THIS IS HIGH ORDER COMPONENT....

import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        console.log("232222222", isLoading)
        return isLoading ? (
            <SpinnerContainer>
                <SpinnerOverlay />
            </SpinnerContainer>
        ) : (
                <WrappedComponent {...otherProps} />
            )
    }

    return Spinner;
}

export default WithSpinner;