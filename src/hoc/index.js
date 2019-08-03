import React from 'react';
import { useSimpleState } from '../hook';

const withSimpleState = props => (WrappedComponent) => {
    function SimpleStateHOC() {
        const wrappedState = useSimpleState(props);
        return (
            <WrappedComponent {...wrappedState} />
        );
    }

    return SimpleStateHOC;
};

export { withSimpleState };
