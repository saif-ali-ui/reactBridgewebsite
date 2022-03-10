import React from 'react'
import Services from './Services';
import Slider from './Slider';
import AboutBridgeCare from './AboutBridgeCare'
import Servicesb from './Servicesb';
import ContactUs from './ContactUs';
import TeamMenbers from './TeamMenbers';

const HomePage = () => {
  return (
    <div className="App">
      <Slider />
      <Services />
      <AboutBridgeCare />
      <Servicesb />
      <ContactUs />
      <TeamMenbers />
    </div>
  )
}

export default HomePage