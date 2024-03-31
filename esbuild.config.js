const { build } = require('esbuild');

build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: './dist/index.js',
  minify: true,
  target: 'es2020',
  platform: 'node',
  define: {
    'process.env.NODE_ENV': '"production"'
  }
})