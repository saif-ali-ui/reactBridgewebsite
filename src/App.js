import './App.css';
import Services from './Services';
import Slider from './Slider';
import Navbar from './Navbar';
import AboutBridgeCare from './AboutBridgeCare'
import Servicesb from './Servicesb';
import ContactUs from './ContactUs';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TeamMenbers from './TeamMenbers';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
          
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/services' element={[<Services />, <Servicesb /> ]} />
      <Route path='/team' element={<TeamMenbers/>} />
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
