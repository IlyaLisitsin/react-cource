/* eslint-disable */
import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { Provider } from 'react-redux';

import configureStore from './configureStore'

import Root from './Root'

const css = new Set();
const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
const renderHtml = (html, preloadedState) => `<!doctype html>
<html>
    <head>
        <style>${[...css].join('')}</style>
    </head>
    <body>
        <div id="root">${html}</div>
    </body>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
</html>`

export default function serverRenderer() {

  return (req, res) => {
      const context = {};
      const store = configureStore();

      console.log(213321231, store.runSaga())

      store.runSaga().done.then(() => {

          console.log('I AM HEEREE')
          const html = renderToString(
              <Provider store={store}>
                  <StaticRouter location={req.url} context={context}>
                      <StyleContext.Provider value={{ insertCss }}>
                          <Root />
                      </StyleContext.Provider>
                  </StaticRouter>
              </Provider>
          );

          if (context.url) {
              res.writeHead(302, {
                  Location: context.url,
              });
              res.end();
              return;
          }

          const preloadedState = store.getState();

          res.send(renderHtml(html, preloadedState));
      });

      renderToString(
          <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                  <StyleContext.Provider value={{ insertCss }}>
                      <Root />
                  </StyleContext.Provider>
              </StaticRouter>
          </Provider>
      );

      store.close();
  }
}
