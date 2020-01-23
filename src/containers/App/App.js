import React, { Component } from 'react';
import './App.module.css';

import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Billboard from '../../components/Billboard/Billboard';

class App extends Component {
  render () {

    const billboardText1 = `The Ford Tourneo Connect is a relaxing and comfortable 
    place to be. Great to drive, great to sit in, it boasts
    premium finished, high quality materials and fuel 
    efficiency without compromising everyday practicality.`;

    const billboardText2 = `At Bristol Street Versa our priority is to offer so much
    more than just the sale of a Wheelchair Accessible Vehicle (WAV). We recognise
    that the lives of the majority of our customer aren't always plain sailing - 
    and that's why we are commmitted to step in to make sure we are #KeepingYouGoing.`;

    return (
      <div>
        <Header/>
        <SubHeader/>
        <Billboard src="https://www.bristolstreetversa.com/custom/51650.jpg" 
          heading="Versa Connect" 
          text={billboardText1}
          buttonText="Make an Enquiry"/>
        <Billboard src="https://www.bristolstreetversa.com/custom/51651.jpg" 
          heading="Keeping you going" 
          text={billboardText2}
          buttonText="More Information"/>
      </div>
    );
  }
}

export default App;
