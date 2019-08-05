import { useState, useEffect } from 'react';

import { emitter } from '../emitter';
import { State } from '../state';

export function useSnapState(props = []) {
    const current = Object.assign({}, State);
    const matching = {};
    props.forEach((prop) => {
        if (current[prop]) {
            matching[prop] = current[prop];
        }
    });

    const [state, setState] = useState({...matching});

    function handleStateChange({ key, value }) {
        setState({
            [key]: value,
        });
    }

    useEffect(() => {
        if (props && Array.isArray(props)) {
            for (let i = 0; i < props.length; i++) {
                emitter.on(props[i], handleStateChange);
            }
        }

        return () => {
            if (props && Array.isArray(props)) {
                for (let i = 0; i < props.length; i++) {
                    emitter.off(props[i], handleStateChange);
                }
            }
        }
    });

    return state;
}
