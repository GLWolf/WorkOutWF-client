import React from 'react';
import ReactDOM from 'react-dom';
import profile from './profile';
import renderer from 'react-test-renderer';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<profile />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<profile/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})