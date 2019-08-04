import { emitter } from '../emitter';

export const onSnapState = (props, onStateChange) => {
    // subscribe for changes
    if (props && Array.isArray(props)) {
        for (let i = 0; i < props.length; i++) {
            emitter.on(props[i], onStateChange);
        }
    }

    // returns a unsubscribe callback
    return () => {
        if (props && Array.isArray(props)) {
            for (let i = 0; i < props.length; i++) {
                emitter.off(props[i], onStateChange);
            }
        }
    };
};
