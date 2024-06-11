// rollup.config.js

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'alert.js',
    output: {
        file: 'dist/alert-library.js',
        format: 'umd',
        name: 'AlertLibrary',
    },
    plugins: [resolve(), commonjs()],
};
