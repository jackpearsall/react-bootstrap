import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

it('renders the date', () => {
  const wrapper = shallow((
    <ForecastSummary
      date={123}
      temperature={123}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__date').text()).toEqual('123');
});
it('renders the temperature', () => {
  const wrapper = shallow((
    <ForecastSummary
      date={123}
      temperature={123}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__temperature').text()).toEqual('123');
});
it('renders the description', () => {
  const wrapper = shallow((
    <ForecastSummary
      date={123}
      temperature={123}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__description').text()).toEqual('mockDescription');
});
it('renders the icon', () => {
  const wrapper = shallow((
    <ForecastSummary
      date={123}
      temperature={123}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find('.forecast-summary__icon').text()).toEqual('mockIcon');
});
