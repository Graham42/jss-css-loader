import path from "path";
import webpack from "webpack";
import memoryfs from "memory-fs";

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.jss-css$/,
          use: {
            loader: path.resolve(__dirname, "../src/loader.js"),
          },
        },
      ],
    },
  });

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);

      resolve(stats);
    });
  });
};
