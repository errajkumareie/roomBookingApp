/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../src/screens/Home';
import Header from '../src/components/Header';
import Counter from '../src/components/Counter';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

it('renders Home Correctly', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});

it('renders Header Correctly', () => {
  const header = renderer.create(<Header />).toJSON();
  expect(header).toMatchSnapshot();
});

it('renders Counter Correctly', () => {
  const counter = renderer.create(<Counter />).toJSON();
  expect(counter).toMatchSnapshot();
});
