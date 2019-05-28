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
      searchText: '',
    };
  }


  componentDidMount() {
    this.updateCity('Hebden Bridge');
  }

  updateCity = (city) => {
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
          errorMessage: 'There are no results, try again',
        });
      });
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.setState(this.updateCity(this.state.searchText));
    }
  };

  handleForecastSelect = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  handleInputChange = (event) => {
    this.setState({ searchText: event.target.value });
    if (event.target.value === '') {
      this.setState({ errorMessage: '' });
    }
  };

  render() {
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
          errorMessage={this.state.errorMessage}
          handleInputChange={this.handleInputChange}
          handleKeyDown={this.handleKeyDown}
          searchText={this.state.searchText}
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
