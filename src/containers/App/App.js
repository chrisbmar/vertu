import React from 'react';
import './App.module.css';
import data from '../../data';

import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Billboard from '../../components/Billboard/Billboard';
import CallToAction from '../../components/CallToAction/CallToAction';
import FixedIcons from '../../components/FixedIcons/FixedIcons';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import VehicleInfo from '../VehicleInfo/VehicleInfo';
import Footer from '../../components/Footer/Footer';

const app = () => {
    return (
      <div>
        <Header data={data.header}/>
        <SubHeader data={data.subHeader}/>
        <Billboard src="https://www.bristolstreetversa.com/custom/51650.jpg" 
          heading="Versa Connect" 
          text={data.billboard.text1}
          buttonText="Make an Enquiry"/>
        <VehicleInfo data={data}/>
        <ImageGallery data={data.imageGallery}/>
        <CallToAction 
          buttonText="View our Versa Connect offers"
          data={data.callToAction}/>
        <Billboard src="https://www.bristolstreetversa.com/custom/51651.jpg" 
          heading="Keeping you going" 
          text={data.billboard.text2}
          buttonText="More Information"/>
        <Footer data={data.header}/>
        <FixedIcons data={data.fixedIcons}/>
      </div>
    );
}

export default app;
