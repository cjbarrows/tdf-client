import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/ui/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
