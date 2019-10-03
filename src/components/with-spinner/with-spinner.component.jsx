//  THIS IS HIGH ORDER COMPONENT....

import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {

    const Spinner = ({ isLoading, ...otherProps }) => {
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