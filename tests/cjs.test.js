import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cjs = require('./hx-mirror.cjs');

test('CJS has named and default', () => {
  expect(typeof cjs.hxMirror).toBe('function');
  expect(cjs.default).toBe(cjs.hxMirror);
});