// require.extensions['.scss'] = () => {};
// require.extensions['.less'] = () => {};
// require.extensions['.css'] = () => {};
//
// // require('@babel/register')({
// //   babelrc: false,
// //   presets: ['@babel/preset-env', '@babel/preset-react'],
// //   plugins: ['@babel/plugin-proposal-class-properties'],
// // });
//
// require('@babel/register')();
//
// // require( 'babel-register' )( {
// //   presets: [ 'env' ],
// // } );
// //
// require('./server');

const app = require('./app');

const port = process.env.PORT || 8800;

app.listen(port, () => {
    console.info(`Express listening on port ${port}`); // eslint-disable-line
});

