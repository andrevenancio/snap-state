import React, { Component } from 'react';

import { State } from '../state';
import { emitter } from '../emitter';

const withConsumer = props => (WrappedComponent) => {
    class Consumer extends Component {

        constructor(p) {
            super(p);

            // loops through props and cross reference with current State
            // and adds any matching values
            const state = Object.assign({}, State);
            const matching = {};
            props.forEach((prop) => {
                if (state[prop]) {
                    matching[prop] = state[prop];
                }
            });

            this.state = {
                ...matching,
            }
        }

        componentDidMount() {
            if (props && Array.isArray(props)) {
                for (let i = 0; i < props.length; i++) {
                    emitter.on(props[i], this.handleStateChange);
                }
            }
        }

        componentWillUnmount() {
            if (props && Array.isArray(props)) {
                for (let i = 0; i < props.length; i++) {
                    emitter.off(props[i], this.handleStateChange);
                }
            }
        }

        handleStateChange = ({ key, value }) => {
            this.setState({
                [key]: value,
            });
        }

        render() {
            return (
                <WrappedComponent {...this.props} {...this.state} />
            );
        }
    }

    return Consumer;
};

export { withConsumer };
