import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import axios from 'axios';
import SearchForm from './search-form';
import '../styles/app.scss';

const url = 'https://mcr-codes-weather.herokuapp.com/forecast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
      errorMessage: '',
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.updateCity = this.updateCity.bind(this);
  }


  componentDidMount() {
    this.updateCity('Hebden Bridge');
  }

  updateCity(city) {
    this.setState({ errorMessage: '' });
    axios.get(`${url}?city=${city}`)
      .then(response => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
        });
      })
      .catch(err => {
        this.setState({
          errorMessage: err,
        });
      });
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    const { errorMessage } = this.state;
    if (errorMessage) {
      alert(errorMessage);
    }
    const selectedForecast =
      this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm
          updateCity={this.updateCity}
        />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        { selectedForecast && <ForecastDetails forecast={selectedForecast} /> }
      </div>
    );
  }
}

export default App;
