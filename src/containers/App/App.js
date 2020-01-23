import React, { Component } from 'react';
import './App.module.css';

import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';

class App extends Component {
  render () {

    return (
      <div>
        <Header />
        <SubHeader />
      </div>
    );
  }
}

export default App;
