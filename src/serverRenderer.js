/* eslint-disable */
import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext'

import Root from './Root'

const css = new Set();
const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
const renderHtml = (html) => `<!doctype html>
<html>
    <head>
        <style>${[...css].join('')}</style>
    </head>
    <body>
        <div id="root">${html}</div>
    </body>
</html>`


export default function serverRenderer() {

  return (req, res) => {
    const context = {}

    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
          <StyleContext.Provider value={{ insertCss }}>
            <Root />
          </StyleContext.Provider>
        </StaticRouter>
    );

    res.send(renderHtml(html))
  }
}
