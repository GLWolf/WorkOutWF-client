import React from 'react';
import ReactDOM from 'react-dom';
import NotFoundPage from './NotFoundPage';
import renderer from 'react-test-renderer';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFoundPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<NotFoundPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})