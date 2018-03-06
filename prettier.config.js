module.exports = {
  /*
   * This makes git blame work better. If you have an object
   * {
   *   a: 1,
   *   b: 2
   * }
   * and then add a property after 'b', the line with 'b' gets changed (requires a comma) even
   * though there's no real meaningful change to it. When using the `git blame` command, it
   * looks at line by line changes and so these comma's make it more difficult to follow history.
   */
  trailingComma: "all",
  // markdown should be readable as plain text, so hard wrap
  proseWrap: "always",
};
