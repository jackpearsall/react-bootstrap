import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import '../styles/app.scss';
import ForecastDetails from './forecast-details';
import axios from 'axios';
import SearchForm from './search-form';

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
      error: false,
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.updateCity = this.updateCity.bind(this);
  }


  componentDidMount() {
    axios.get(url)
      .then(response => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
        });
      });
  }

  updateCity(city) {
    // console.log(city);
    // console.log(`${url}?city=${city}`);
    axios.get(`${url}?city=${city}`)
      .then(response => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
        });
        // console.log(this.state.location);
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      alert(':(');
      // return (
      //   <div className="errorScreen">
      //   We're Sorry, try again :(
      //   </div>
      // );
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
        {
            selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

export default App;
