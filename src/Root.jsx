import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';

// import Hello from './components/Hello';
// import HomePage from './pages/HomePage';

const Hello = ({name}) => <div>Hello ------- {name}</div>

const Root = () => (
  <div>
    <h1>Server Side Renderig</h1>
    <Hello name="nigger" />
  </div>
);

export default hot(module)(Root);
