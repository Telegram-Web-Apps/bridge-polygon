import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import {defineConfig} from 'rollup';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html';

export default defineConfig({
  input: 'src/index.ts',
  output: {file: './build/bundle.js', format: 'iife'},
  plugins: [html(), typescript(), nodeResolve(), terser()],
});