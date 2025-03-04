const resolve = require ( "@rollup/plugin-node-resolve");
const  commonjs = require ("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const pkg = require ("./package.json");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }), // Ensure TypeScript is handled
  ],
  external: ["react"],
};
