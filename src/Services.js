import React from 'react';
import './style.css'

import BiotechIcon from '@mui/icons-material/Biotech';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import MedicationIcon from '@mui/icons-material/Medication';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import SpaIcon from '@mui/icons-material/Spa';

function Services() {
      
    return (
        // <Button variant="contained" color="primary">
        //   Hello World11
        // </Button>
        <div className='container'>
            <h1 className='heading'> Our Services</h1>

            <div className='col-lg-12 col-md-12 col-12'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='cards'>
                            <div className='circle-icon'>
                                <BiotechIcon className='icon-style' />
                                <p className='About-heading' >High Quality Equipment</p>
                                <p>We have high quality medical equipment</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='cards'>
                            <div className='circle-icon'>
                                <VaccinesIcon className='icon-style' />
                                <p className='card-heading' >Lab Service</p>
                                <p>We have high quality medical equipment</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='cards'>
                            <div className='circle-icon'>
                                <NaturePeopleIcon className='icon-style' />
                                <p className='card-heading' >Out Door Service</p>
                                <p>We have high quality medical equipment</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='cards'>
                            <div className='circle-icon'>
                                <SpaIcon className='icon-style' />
                                <p className='card-heading' >Home Care</p>
                                <p>We have high quality medical equipment</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='cards'>
                            <div className='circle-icon'>
                                <CoronavirusIcon className='icon-style' />
                                <p className='card-heading' >Corona Virus Vaccines</p>
                                <p>We have high quality medical equipment</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='cards'>
                            <div className='circle-icon'>
                                <MedicationIcon className='icon-style' />
                                <p className='card-heading' >High Quality Equipment</p>
                                <p>We have high quality medical equipment</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Services;