import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import renderer from 'react-test-renderer';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<LandingPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})