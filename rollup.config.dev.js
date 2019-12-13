import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from "@rollup/plugin-json";
import babel from "rollup-plugin-babel";
import { eslint } from "rollup-plugin-eslint";
import copy from 'rollup-plugin-copy';

export default {
  input: './src/js/main.js',
  output: {
    file: './dist/js/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  watch: {
    include: './src/**'
  },
  plugins: [
    json(),
    eslint({
      include: ['./src/js/**']
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    copy({
      targets: [
        { src: './src/styles/fronts/**/*', dest: './dist/styles/fronts/' },
        { src: './src/styles/images/**/*', dest: './dist/styls/images/' },
        { src: './src/js/lib/**/*', dest: './dist/js/lib/' }
      ]
    })
  ]
  // external: ['axios']
};
