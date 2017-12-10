function _s<T>(object: T | null, defaultValue: T = {} as T) : T {
    return object == null
        ? defaultValue
        : object as T;
}

// Global declaration
declare var s: typeof _s;

// Global scope augmentation
var window = window || null;
const _global = (window || global) as any;
_global.s = _s;
