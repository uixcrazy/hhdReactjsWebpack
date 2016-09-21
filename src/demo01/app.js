import React, {Component} from 'react';
import {render} from 'react-dom';
require('./style.css');

export default class App extends Component {
  render() {
    return (
      <p>Add your component markup and other subcomponent references here.</p>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
