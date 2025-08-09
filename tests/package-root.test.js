import { describe, test, expect } from '@jest/globals';

describe('package ESM entry', () => {
  test('exports hxMirror (named) & default', async () => {
    const mod = await import('../dist/hx-mirror.esm.js');
    expect(typeof mod.hxMirror).toBe('function');
    expect(mod.default).toBe(mod.hxMirror);
  });
});