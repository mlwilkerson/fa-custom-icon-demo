# Font Awesome Custom Icon Demo

This demo using Node.js and Rollup for a build pipeline to create a bundle that is loading in the browser.

If you are using Font Awesome by loading one of our pre-built CDN bundles via `<script>`, like this...
```html
<script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
```
...then here's a [CodePen](https://codepen.io/fontawesome/pen/YaaYqP) demo that you might find more helpful.

## To See This Demo
1. `yarn install`
2. `./node_modules/.bin/rollup -c` to build `bundle.js` from `index.js`
3. load `index.html` in a web browser, and voila

## To Make Your Own, Follow the Pattern

1. Use your favorite tool to create your icon as an SVG.
2. Copy the svg path data from the `d=` attribute of the `<path>` element inside the resulting svg file.
3. Create and export a plain JavaScript object in your own custom icon pack file similar to the `faSplat` sample in `custom-icon-pack.js`.
4. Paste the svg path data into the same place in that JavaScript object as you see the svg path data in the `faSplat` sample.
5. Set the remaining properties of that JavaScript object as follows:
```javascript
export const faSomeObjectName = {
  // Use a prefix like 'fac' that doesn't conflict with a prefix in the standard Font Awesome styles
  // (So avoid fab, fal, fas, far, fa)
  prefix: string,
  iconName: string, // Any name you like
  icon: [
    number, // width
    number, // height
    string[], // ligatures
    string, // unicode (if relevant)
    string // svg path data
  ]
}
```
