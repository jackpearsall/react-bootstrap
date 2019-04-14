import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

const ForecastSummary = props => (
  <div>
    <div className="forecast-summary__date"><span>{Moment(props.date).format('ddd Do MMM')}</span></div>
    <div className="forecast-summary__temperature"><span>{props.temperature}°c</span></div>
    <div className="forecast-summary__description"><span>{props.description}</span></div>
    <div className="forecast-summary__icon"><WeatherIcon name="owm" iconId={props.icon} /></div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
