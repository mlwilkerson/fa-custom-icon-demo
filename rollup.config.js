// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  plugins: [
    resolve(),
  ],
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: 'fa-custom-icon'
  }
};
