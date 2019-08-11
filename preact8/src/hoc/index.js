import { h, Component } from 'preact';
import { onSnapState } from '../../../src/vanilla';

const withSnapState = props => WrappedComponent => {
    class SnapStateHOC extends Component {
        state = {};

        componentDidMount() {
            this.tempHook = onSnapState(props, this.updateState);
        }

        componentWillUnmount() {
            this.tempHook();
        }

        updateState = ({ key, value }) => {
            this.setState({
                [key]: value,
            });
        };

        render() {
            return <WrappedComponent {...this.state} />;
        }
    }

    return SnapStateHOC;
};

export { withSnapState };
