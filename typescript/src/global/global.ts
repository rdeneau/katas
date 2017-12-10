function _s<T>(object: T | null, defaultValue: T = {} as T) : T {
    return object == null
        ? defaultValue
        : object as T;
}
// Global scope augmentation
declare var global: NodeJS.Global; // Via npm package "@types/node"
declare var window: Window;

export function initGlobals() {
    ((window || global) as any).s = _s;
}
