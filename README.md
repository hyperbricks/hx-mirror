# hx-mirror

A lightweight [HTMX](https://htmx.org) extension for mirroring content: declaratively syncs an element’s innerHTML to one or more targets using the hx-mirror attribute after HTMX swap events (`htmx:afterSwap`, `htmx:oobAfterSwap`).

## Quick Start (Browser + CDN)

```html
<!-- Load HTMX -->
<script src="https://unpkg.com/htmx.org@2.0.6"></script>

<!-- Load hx-mirror IIFE build -->
<script src="https://cdn.jsdelivr.net/npm/hx-mirror@1.0.4/dist/hx-mirror.iife.js"></script>
```

### Example

```html
<body hx-ext="mirror">
    <!-- Source element with hx-mirror attribute -->
    <div id="source" hx-mirror="#target1, #target2" hx-get="simple-fragment.html" hx-trigger="load"></div>

    <!-- Target elements to mirror the content into -->
    <div id="target1"></div>
    <div id="target2"></div>
</body>
```


> **Notes:**
> This extension requires [htmx](https://htmx.org) (included globally or imported as a module). This project is not an official htmx extension and is not affiliated with or endorsed by the htmx project.

---

## Usage

Add the [hx-ext](https://htmx.org/attributes/hx-ext/) attribute to init extension (`hx-ext="mirror"`). Then use the `hx-mirror` attribute on any element and specify one or more CSS selectors to mirror its content to.

---

## Available Builds (`dist/` folder)

When you install or download `hx-mirror`, you’ll find several files in the `dist/` folder.
Here’s what each file is for, and which one you should use:

| File                  | Use case / Description                                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **hx-mirror.iife.js** | For direct use in the browser with a `<script>` tag. Auto-installs if `window.htmx` exists. No build tools needed.                                              |
| **hx-mirror.esm.js**  | For modern JavaScript projects using ES Modules (`import ... from ...`). Use this if you use a bundler like Webpack, Vite, or Rollup, or in supported browsers. |
| **hx-mirror.cjs.js**  | For older Node.js projects or tools that use CommonJS (`require()`). Only use if your environment does not support ES Modules.                                  |
| **.map** files        | Source maps for debugging; you usually don’t need to include these in production.                                                                               |

---

### 1. Using in the browser (no build tools)

```html
<!-- Load HTMX -->
<script src="https://unpkg.com/htmx.org@2.0.4"></script>

<!-- Load hx-mirror IIFE build (versioned for stability) -->
<script src="https://cdn.jsdelivr.net/npm/hx-mirror@1.0.4/dist/hx-mirror.iife.js"></script>
```

If you want to always get the latest (not recommended for production):

```html
<script src="https://cdn.jsdelivr.net/npm/hx-mirror/dist/hx-mirror.iife.js"></script>
```

---

### 2. Using with ES Modules / modern bundlers

```js
import htmx from 'htmx.org';
import { hxMirror } from 'hx-mirror';

hxMirror(htmx);
```

### HTML still needs:

```html
<body hx-ext="mirror">
  ...
</body>
```
---

### 3. Using with CommonJS (`require()`)

```js
const htmx = require('htmx.org');
const { hxMirror } = require('hx-mirror/dist/hx-mirror.cjs.js');

// Register the extension with your htmx instance
hxMirror(htmx);
```
### HTML still needs:

```html
<body hx-ext="mirror">
  ...
</body>
```

---

### Which file should I use?

| File                  | Use case / Description                                                                                                           | Auto-registers with htmx?             | Add `hx-ext="mirror"` in HTML? |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------ |
| **hx-mirror.iife.js** | For direct use in the browser with a `<script>` tag (CDN/local). Works out of the box — just add `hx-ext="mirror"` to your HTML. | ✅ Yes                                 | ✅ Yes                          |
| **hx-mirror.esm.js**  | For modern JavaScript projects using ES Modules (`import`). Use with bundlers like Webpack, Vite, or Rollup.                     | ❌ No — call `hxMirror(htmx)` manually | ✅ Yes                          |
| **hx-mirror.cjs.js**  | For Node.js or tools that use CommonJS (`require()`). Can also be used in older browser setups with a bundler that supports CJS. | ❌ No — call `hxMirror(htmx)` manually | ✅ Yes                          |


---

### Demos

```bash
npm i
npm run build
npm run serve
```

Then go to:
[http://localhost:3000](http://localhost:3000)