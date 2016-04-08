import { Router } from 'react-routing';
import Home from './screens/home/Screen';
import React from 'react';
import 'babel-polyfill';

export default new Router(on => {
  on('*', s => Home);
});
