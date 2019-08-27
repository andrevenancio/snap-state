import React from 'react';
import { useSnapState } from '../hook';

const withSnapState = props => WrappedComponent => {
    function SnapStateHOC() {
        const wrappedState = useSnapState(props);
        return <WrappedComponent {...wrappedState} />;
    }

    return SnapStateHOC;
};

export { withSnapState };
