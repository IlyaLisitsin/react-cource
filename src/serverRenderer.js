/* eslint-disable */
import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

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

import createRootReducer from './reducers';


export default function serverRenderer() {

  return (req, res) => {
    // const context = {
    //     location: {
    //         hash: "",
    //         pathname: "/",
    //         search: "",
    //         state: undefined,
    //     },
    //     match: {
    //         isExact: true,
    //         params: {},
    //         path: "/",
    //         url: "/",
    //     }
    // };

      const context = {};

      const store = createStore(
          createRootReducer()
      );

      // renderToString(
      //     <Provider store={store}>
      //         <StaticRouter location={req.url} context={context}>
      //             <StyleContext.Provider value={{ insertCss }}>
      //                 <Root />
      //             </StyleContext.Provider>
      //         </StaticRouter>
      //     </Provider>
      // );

      const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <StyleContext.Provider value={{ insertCss }}>
                <Root />
              </StyleContext.Provider>
            </StaticRouter>
        </Provider>
    );

      const preloadedState = store.getState()
      // console.log('PRELOADED STATE', preloadedState)


      res.send(renderHtml(html, preloadedState))
  }
}
