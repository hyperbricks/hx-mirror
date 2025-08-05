# hx-mirror

A lightweight [HTMX](https://htmx.org) extension for mirroring content: declaratively syncs an element’s innerHTML to one or more targets using the hx-mirror attribute after HTMX swap events (htmx:afterSwap, htmx:oobAfterSwap).

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

> *Notes:*
> This extension requires [htmx](https://htmx.org) (included globally or imported as a module).

> This project is not an official htmx extension and is not affiliated with or endorsed by the htmx project.

## Usage
Add the [hx-ext](https://htmx.org/attributes/hx-ext/) attribute to init extension (hx-ext="hx-mirror"). Then use the `hx-mirror` attribute to any element and specify one or more CSS selectors to mirror its content to.

## **Available Builds (`dist/` folder)**

When you install or download `hx-mirror`, you’ll find several files in the `dist/` folder.
**Here’s what each file is for, and which one you should use:**

| File                         | Use case / Description                                                                                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **hx-mirror.iife.js**        | For direct use in the browser with a `<script>` tag. This file works out of the box—no build tools needed. Exposes the extension as a global variable.          |
| **hx-mirror.esm.js**         | For modern JavaScript projects using ES Modules (`import ... from ...`). Use this if you use a bundler like Webpack, Vite, or Rollup, or in supported browsers. |
| **hx-mirror.cjs.js**         | For older Node.js projects or tools that use CommonJS (`require()`). Only use if your environment does not support ES Modules.                                  |
| **.map** files (source maps) | Used by developer tools for debugging; you usually don’t need to include these in production, but they’re useful if you want to debug the source code.          |

---

### **How to use each build**

**1. Using in the browser (no build tools):**

```html
<!-- First import core htmx -->
<script src="https://unpkg.com/htmx.org@2.0.6"></script>

<!-- Use a specific version (recommended for stability) -->
<script src="https://cdn.jsdelivr.net/npm/hx-mirror@1.0.3/dist/hx-mirror.iife.js"></script>

<!-- Or always get the latest version (for quick demos, not recommended for production) -->
<script src="https://cdn.jsdelivr.net/npm/hx-mirror@latest/dist/hx-mirror.iife.js"></script>

<!-- Now hxMirror is available as a global variable -->
```

**2. Using with ES Modules / modern bundlers:**

```js
import htmx from 'htmx.org';
import { hxMirror } from 'hx-mirror'; 
// registering (for ES Modules)
hxMirror(htmx);
```

**3. Using with CommonJS (`require()`):**

```js
const hxMirror = require('hx-mirror/dist/hx-mirror.cjs.js');
```

---

### **Which file should I use?**

* **If you don’t use build tools:** Use `hx-mirror.iife.js`.
* **If you use a modern JS project:** Use `hx-mirror.esm.js`.
* **If you use old-style Node.js:** Use `hx-mirror.cjs.js`.




### Demos

````
npm i
npm run build
npm run serve
````

Then go to:  http://localhost:3000 


