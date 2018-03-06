const css = require("jss-css/lib/css");

module.exports = function(source) {
  let jss = css`
    ${source};
  `;
  let result = `export default ${JSON.stringify(jss, null, 2)}`;
  return result;
};
