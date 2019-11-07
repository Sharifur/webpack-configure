import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';
import './index.scss';

ReactDOM.render(
  // <MyComponent title="Hello World"/>
  React.createElement(MyComponent,{title:'Hello World'}),
  document.getElementById('root')
);
