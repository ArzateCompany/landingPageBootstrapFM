import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.esm';

import './style/bootstrap.scss';

import LandingPage from './pages/LandingPage.jsx';

Array.from(document.querySelectorAll('.toast'))
  .forEach(toastNode => new Toast(toastNode))

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<LandingPage />, document.getElementById('app'))

