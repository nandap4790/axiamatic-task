import React from 'react';

import FullLengthHeader from './rows/FullLengthHeader';
import { Content } from './rows/Content';

import './App.css';

const App = () => {
  return (
    <div className="axiamatic-tools">
      <FullLengthHeader />
      <Content />
    </div>
  );
}

export default App;
