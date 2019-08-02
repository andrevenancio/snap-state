import { emitter } from '../emitter';

export const State = new Proxy({}, {
    get(target, name, receiver) {
        if (!Reflect.has(target, name)) {
            console.warn(`Trying to access unexistent prop "${name}".`);
            return undefined;
        }
        return Reflect.get(target, name, receiver);
    },
    set(target, name, value, receiver) {
        emitter.emit(name, { key: name, value });
        return Reflect.set(target, name, value, receiver);
    },
});
