import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { location, forecasts } from './data/forecast.json';


// render(<App />, document.getElementById('root'));

render(<App location={location} forecasts={forecasts} forecast={forecasts[0]} />, document.getElementById('root'));
