// src/htmx-mirror.js
export function hxMirror(htmx) {
    htmx.defineExtension('mirror', {
        onEvent(name, evt) {
            if (name === 'htmx:afterSwap' || name === 'htmx:oobAfterSwap') {
                document.querySelectorAll('[hx-mirror]').forEach(elt => {
                    const selectorList = elt.getAttribute('hx-mirror');
                    if (!selectorList) return;
                    selectorList.split(',').map(sel => sel.trim()).forEach(sel => {
                        const target = document.querySelector(sel);
                        if (target && target !== elt && target.innerHTML !== elt.innerHTML) {
                            target.innerHTML = elt.innerHTML;
                        }
                    });
                });
            }
        }
    });
}

// Optional global auto-install for browsers
if (typeof window !== 'undefined' && window.htmx) {
    hxMirror(window.htmx);
}
