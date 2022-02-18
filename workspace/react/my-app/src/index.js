import React from 'react';
import ReactDOM from 'react-dom';
import Template from './page/pageTemplate';

import './css/reset.css';
import './css/common.css';

ReactDOM.render(
  <React.StrictMode>
    <Template />
  </React.StrictMode>,
  document.getElementById('root')
);