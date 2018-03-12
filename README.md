<div align="center">
  <img width="180" height="180" vspace="20"
    src="./images/jss-logo.svg">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>jss-css loader</h1>
</div>

This is a webpack loader to wrap the [jss-css][] module so you can write regular
css files and import them to use as jss.

[jss-css]: https://github.com/alexkuz/jss-css

<h2 align="center">Install</h2>

```bash
npm install --save-dev jss-css-loader
```

<h2 align="center">Usage</h2>

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.jss-css$/,
        use: ["jss-css-loader"],
      },
    ],
  },
};
```

**file.jss-css**

```css
.myFlair {
  background: #f00;
}
```

**file.js**

```js
import styles from "file.jss-css";

console.log(styles);
/*
{
  "myFlair": {
    "background": "#f00"
  }
}
*/
```
