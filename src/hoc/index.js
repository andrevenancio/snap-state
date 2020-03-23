import React, { Component } from 'react';
import { onSnapState } from '../vanilla';

const withSnapState = props => WrappedComponent => {
    class SnapStateHOC extends Component {
        state = {};

        componentDidMount() {
            this.unsubscribe = onSnapState(props, this.handleSnapStateChange);
        }

        componentWillUnmount() {
            this.unsubscribe();
        }

        handleSnapStateChange = ({ key, value }) => {
            this.setState({
                [key]: value,
            });
        };

        render() {
            return <WrappedComponent {...this.props} {...this.state} />;
        }
    }

    return SnapStateHOC;
};

export { withSnapState };
