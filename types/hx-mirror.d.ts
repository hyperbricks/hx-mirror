// types/hx-mirror.d.ts

import 'htmx.org';

export declare function hxMirror(htmx: typeof import('htmx.org')): void;

// augment HTMX defineExtension signature
declare module 'htmx.org' {
  interface Htmx {
    defineExtension(
      name: 'mirror',
      config: {
        onEvent(name: string, evt: any): void
      }
    ): void;
  }
}
