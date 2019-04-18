import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

describe('Renders the forecast summary section', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow((
      <ForecastSummary
        date={1525046400000}
        temperature={123}
        description="mockDescription"
        icon="<WeatherIcon />"
      />
    ));
  });
  it('renders the date', () => {
    expect(wrapper.find('.forecast-summary__date').text()).toEqual('Mon 30th Apr');
  });
  it('renders the temperature', () => {
    expect(wrapper.find('.forecast-summary__temperature').text()).toEqual('123°c');
  });
  it('renders the description', () => {
    expect(wrapper.find('.forecast-summary__description').text()).toEqual('mockDescription');
  });
  it('renders the icon', () => {
    expect(wrapper.find('.forecast-summary__icon').text()).toEqual('<WeatherIcon />');
  });
});
