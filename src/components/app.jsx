import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import '../styles/app.scss';
import ForecastDetails from './forecast-details';

const App = props => (
  <div className="forecast">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries forecasts={props.forecasts} />
    <ForecastDetails forecast={props.forecasts[0]} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
  forecast: PropTypes.object.isRequired,
};

export default App;
