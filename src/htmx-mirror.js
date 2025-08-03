// src/htmx-mirror.js

export function hxMirror(htmx) {
  htmx.defineExtension('mirror', {
    onEvent(name, evt) {
      if (name !== 'htmx:afterSwap' && name !== 'htmx:oobAfterSwap') {
        return;
      }

      // get the element that just got swapped in
      const source = name === 'htmx:oobAfterSwap'
        ? evt.detail && evt.detail.target
        : evt.detail && evt.detail.elt;
      if (!source || !source.hasAttribute('hx-mirror')) {
        return;
      }

      // split & trim once
      const selectors = (source.getAttribute('hx-mirror') || '')
        .split(/,\s*/)
        .filter(s => s);

      // for each selector, mirror into all matches
      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(target => {
          if (target === source) return;

          // 1) loop-detection: does the target itself mirror back to this source?
          if (target.hasAttribute('hx-mirror')) {
            const backSelectors = (target.getAttribute('hx-mirror') || '')
              .split(/,\s*/)
              .filter(s => s);
            // if any of target’s mirror-selectors matches our source element → warn once
            if (backSelectors.some(bs => {
              try { return source.matches(bs); }
              catch(_) { return false; }
            })) {
              console.warn(`hx-mirror: detected mirror loop between <${source.tagName.toLowerCase()} id="${source.id}"> and <${target.tagName.toLowerCase()} id="${target.id}">`);
            }
          }

          // 2) only update if content really changed
          if (target.innerHTML === source.innerHTML) return;

          // 3) perform the mirror
          target.innerHTML = source.innerHTML;

          // 4) emit htmx:mirrored so folks can re-init widgets
          target.dispatchEvent(new CustomEvent('htmx:mirrored', {
            detail: { source }
          }));
        });
      });
    }
  });
}

// auto-install if htmx is on window
if (typeof window !== 'undefined' && window.htmx) {
  hxMirror(window.htmx);
}
