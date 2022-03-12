import React from 'react'
import './style.css'
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img className="navbar-brand img-fluid" style={{ width: '12%' }} src='	https://bridgecare.bridgeconnect.pk/wp-content/uploads/2022/03/bridge-LOGO2-removebg-preview.png' alt='img' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item nav-items">
                <Link to='/' className="nav-link active" aria-current="page"> Home </Link>
              </li>

              <li className="nav-item nav-items">
                <Link to='/services' className='nav-link active' aria-current="page"> Services </Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to='/about-bridge' className="dropdown-item ">About Bridge </Link></li>
                  <li><a className="dropdown-item " href="#">FAQS </a></li>
                  <li><a className="dropdown-item" href="#">TERMS & CONDITION</a></li>

                  <li><a className="dropdown-item" href="#">HELP</a></li>
                </ul>
              </li>

              <li className="nav-item nav-items">
                <Link to='/contactus' className="nav-link active" aria-current="page"> Contact</Link>
              </li>

              <li className="nav-item nav-items">
                <Link to='/team' className="nav-link active" aria-current="page"> Team Members</Link>
              </li>

              <li className="nav-item nav-items">
                <Link to='/gallery' className="nav-link active" aria-current="page"> Gallery</Link>
              </li>

              <li className="nav-item nav-items">
                <Link to='/offers' className='nav-link active' aria-current="page"> We Offer </Link>
              </li>

            </ul>



            <Link to='/register'>
              <Button

                variant="contained"
                color="primary"
                style={{ paddingLeft: '10px', backgroundColor: '#00bcd4' }}
                startIcon={<AddCircleOutlineIcon />}
              >
                Registration
              </Button>
            </Link>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar