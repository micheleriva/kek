import { uglify } from 'rollup-plugin-uglify'

export default [
  {
    input: './index.js',

    output: {
      name: 'dist',
      format: 'umd',
      file: 'dist.js',
      dir: './dist'
    },

    watch: {
      exclude: ['node_modules/**']
    },

    plugins: [
      // uglify()
    ]
  }
]