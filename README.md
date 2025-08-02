# htmx-mirror

A lightweight [htmx](https://htmx.org) extension to mirror innerHTML from one element to others using the declarative hx-mirror attribute.

## Usage

Add the `hx-mirror` attribute to any element and specify one or more CSS selectors to mirror its content to.

### Example

```html
<div id="source" hx-mirror="#target1, #target2">
    This content will be mirrored.
</div>

<div id="target1"></div>
<div id="target2"></div>
```


### Demos

````
npm i
npm run build
npm run serve
```
Then go to:  http://localhost:3000 