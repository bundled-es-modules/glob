# glob

This is a mirror of [glob](https://www.npmjs.com/package/glob), bundled and exposed as ES module, exposes a browser entrypoint that works in browser without any additional build tool transformations.

It additionally comes with a patch of path-scurry, where we just assume the `fs` option is always passed to glob.

> Therefore, with this mirror of `glob`, you MUST always pass the `fs` property in the options parameter, even if you do end up using Node's builtin `fs` module.

> When using a custom FS implementation, you may need a leading slash in glob search value.

## Install

```sh
npm install @bundled-es-modules/glob
```

## Use

```html
<script type="module">
  import glob from '@bundled-es-modules/glob';
</script>
```
