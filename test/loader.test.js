import compiler from "./compiler.js";

test("Inserts css and outputs JavaScript jss module", async () => {
  const stats = await compiler("example.jss-css");
  const output = stats.toJson().modules[0].source;

  expect(output).toBe(`export default {
  "test": {
    "color": "#fff"
  }
}`);
});
