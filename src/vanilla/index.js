import { emitter } from '../emitter';

export const onSimpleState = (props, onPropChange) => {
    // register for changes
    if (props && Array.isArray(props)) {
        for (let i = 0; i < props.length; i++) {
            emitter.on(props[i], onPropChange);
        }
    }

    // returns a destroy callback
    return () => {
        if (props && Array.isArray(props)) {
            for (let i = 0; i < props.length; i++) {
                emitter.off(props[i], onPropChange);
            }
        }
    };
};
