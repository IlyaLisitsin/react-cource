require.extensions['.scss'] = () => {};
require.extensions['.less'] = () => {};
require.extensions['.css'] = () => {};

// require('@babel/register')({
//   babelrc: false,
//   presets: ['@babel/preset-env', '@babel/preset-react'],
//   plugins: ['@babel/plugin-proposal-class-properties'],
// });

require('@babel/register')();

// require( 'babel-register' )( {
//   presets: [ 'env' ],
// } );
//
require('./server');
