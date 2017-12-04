export function* wordWrap(s: string|null, len: number) {
    s = (s || '').trim();
    while (s.length > len) {
        let wrapAt = s.lastIndexOf(' ', len);
        if (wrapAt <= 0) {
            wrapAt = len;
        }
        yield s.slice(0, wrapAt).trim();
        s = s.slice(wrapAt).trim();
    }
    yield s;
}
