const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../src/components/app');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next()
});

function htmlTemplate(reactDom) {
    return `
        <!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <title>React Course</title>
</head>
<body>
<div id='root'>${reactDom}</div>
</body>
</html>
    `;
}

app.get( '/*', ( req, res ) => {
    const jsx = (<App />);
    const reactDom = renderToString(jsx);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(reactDom));
} );

app.listen(2048);
