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
import OurPartners from './OurPartners';
import Blogs from './Blogs';
import TermsCondition from './TermsCondition';
import Help from './Help';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/reactBridgewebsite' element={<HomePage />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/services' element={[<Services />, <Servicesb />]} />
        <Route path='/team' element={<TeamMenbers />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about-bridge' element={<AboutBridgeCare />} />
        <Route path='/offers' element={<WeOffers />} />
        <Route path='/partners' element={<OurPartners />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/terms' element={<TermsCondition />} />
        <Route path='/help' element={<Help />} />
      </Routes> 
 
    </div>
  );
}

export default App;
