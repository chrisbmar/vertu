import React, { Component } from 'react';
import './App.module.css';

import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Billboard from '../../components/Billboard/Billboard';

class App extends Component {
  render () {

    return (
      <div>
        <Header/>
        <SubHeader/>
        <Billboard src="https://www.bristolstreetversa.com/custom/51650.jpg"/>
        <Billboard src="https://www.bristolstreetversa.com/custom/51651.jpg"/>
      </div>
    );
  }
}

export default App;
