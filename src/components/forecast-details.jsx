import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const ForecastDetails = props => (
  <div>
    <div className="forecast-details__date"><span>{Moment(props.forecast.date).format('ddd Do MMM')}</span></div>
    <div className="forecast-details__min-temp"><span>Min:{props.forecast.temperature.min}</span></div>
    <div className="forecast-details__max-temp"><span>Max:{props.forecast.temperature.max}</span></div>
    <div className="forecast-details__humidity"><span>Humidity:{props.forecast.humidity}</span></div>
    <div className="forecast-details__wind-speed"><span>Wind Speed:{props.forecast.wind.speed}</span></div>
    <div className="forecast-details__wind-direction"><span>Wind Direction:{props.forecast.wind.direction}</span></div>
  </div>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastDetails;
