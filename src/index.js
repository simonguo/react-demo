
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import logo from './react-logo.png';
import ImageFrame from './ImageFrame';

const App = React.createClass({

  render() {
    return (

      <div className="container">
        <h1>Hello React</h1>
        <img src={logo} className="logo" />
      </div>
    );
  }
});

ReactDOM.render(<App />,
  document.getElementById('app')
);

