import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import renderer from 'react-test-renderer';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<LoginPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})