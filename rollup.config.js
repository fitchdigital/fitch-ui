import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import commonjs from 'rollup-plugin-commonjs';

const pkg = require('./package.json');
const license = require('./license-template');

const input = './src/index.js';
const name = '@fitch-digital/fitch-ui';

const bannerPlugin = {
    banner: `/*!
@fileoverview ${name}
@author FITCH DIGITAL
@version ${pkg.version}

${license}

*/`
}

export default [
    {
        input,
        output: {
            name,
            file: pkg.browser,
            format: 'umd',
        },
        external: [
            'react',
            'react-proptypes'
        ],
        plugins: [
            bannerPlugin,
            resolve(),
            commonjs({
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement'],
                    'node_modules/classnames/index.js': ['classnames'],
                },
            }),
            babel({
                exclude: ['node_modules/**'],
                babelrc: false,
                presets: [
                    ['@babel/env', { modules: false }],
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-proposal-export-default-from',
                ],
            }),
            sass({
                insert: true,
                output: 'dist/styles.css',
            }),
        ],
    },
];
