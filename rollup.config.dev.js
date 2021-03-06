import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from "@rollup/plugin-json";
import babel from "rollup-plugin-babel";
import { eslint } from "rollup-plugin-eslint";

export default {
  input: './src/main.js',
  output: {
    name: 'main',
    file: './main.js',
    format: 'iife',
    sourcemap: true
  },
  watch: {
    include: './src/**'
  },
  plugins: [
    json(),
    eslint({
      include: ['./src/**']
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ],
};
