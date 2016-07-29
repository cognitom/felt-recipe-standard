'use strict'

/**
 * Standard recipe for Felt
 */

const
  rollup = require('felt-rollup'),
  babel = require('rollup-plugin-babel'),
  resolve = require('rollup-plugin-node-resolve'),
  commonjs = require('rollup-plugin-commonjs'),
  postcss = require('felt-postcss'),
  postcssImport = require('postcss-import'),
  cssnext = require('postcss-cssnext')

module.exports = {
  // default handlers for each extension
  handlers: {
    '.js': rollup({
      plugins: [
        resolve({ jsnext: true,  main: true, browser: true }),
        commonjs(),
        babel({
          babelrc: false,
          presets: ['es2015-rollup']
        })
      ],
      sourceMap: true
    }),
    '.css': postcss({
      plugins: [
        postcssImport(),
        cssnext()
      ],
      options: {
        map: { inline: false }
      }
    })
  }
}
