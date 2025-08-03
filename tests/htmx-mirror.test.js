/**
 * @jest-environment jsdom
 */
import { describe, test, expect, beforeEach, jest } from '@jest/globals';
import { hxMirror } from '../src/htmx-mirror.js';

describe('hx-mirror extension', () => {
  let htmx, handler;

  beforeEach(() => {
    document.body.innerHTML = '';
    htmx = { defineExtension: jest.fn() };
    hxMirror(htmx);
    const [[, config]] = htmx.defineExtension.mock.calls;
    handler = config.onEvent;
  });

  test('mirrors to multiple targets on afterSwap', () => {
    document.body.innerHTML = `
      <div id="src" hx-mirror=".a, .b">hello</div>
      <div class="a"></div>
      <div class="b"></div>
    `;
    const src = document.getElementById('src');
    handler('htmx:afterSwap', { detail: { elt: src } });
    expect(document.querySelector('.a').innerHTML).toBe('hello');
    expect(document.querySelector('.b').innerHTML).toBe('hello');
  });

  test('skips targets whose content is already equal', () => {
    document.body.innerHTML = `
      <div id="src" hx-mirror=".x">foo</div>
      <div class="x">foo</div>
    `;
    const src = document.getElementById('src');
    handler('htmx:afterSwap', { detail: { elt: src } });
    // still foo, but no change event
    expect(document.querySelector('.x').innerHTML).toBe('foo');
  });

  test('warns on mirror loops', () => {
    console.warn = jest.fn();
    document.body.innerHTML = `
      <div id="s" hx-mirror=".t">S</div>
      <div class="t" hx-mirror="#s">T</div>
    `;
    const s = document.getElementById('s');
    // simulate s -> t
    handler('htmx:afterSwap', { detail: { elt: s } });
    // simulate t -> s (loop)
    const t = document.querySelector('.t');
    handler('htmx:afterSwap', { detail: { elt: t } });
    expect(console.warn).toHaveBeenCalled();
  });

  test('dispatches htmx:mirrored event on each update', () => {
    document.body.innerHTML = `
      <div id="src" hx-mirror=".z">XYZ</div>
      <div class="z"></div>
    `;
    const listener = jest.fn();
    document.querySelector('.z').addEventListener('htmx:mirrored', listener);
    const src = document.getElementById('src');
    handler('htmx:afterSwap', { detail: { elt: src } });
    expect(listener).toHaveBeenCalledWith(expect.objectContaining({
      detail: { source: src }
    }));
  });
});
