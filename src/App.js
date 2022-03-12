import './App.css';
import Services from './Services';
import Navbar from './Navbar';
import AboutBridgeCare from './AboutBridgeCare'
import Servicesb from './Servicesb';
import ContactUs from './ContactUs';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TeamMenbers from './TeamMenbers';

import Registration from './Registration';
import Gallery from './Gallery';
import WeOffers from './WeOffers';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/services' element={[<Services />, <Servicesb />]} />
        <Route path='/team' element={<TeamMenbers />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about-bridge' element={<AboutBridgeCare />} />
        <Route path='/offers' element={<WeOffers />} />
        
      </Routes>
    </div>
  );
}

export default App;
