import React from 'react'
import AboutCard from './AboutCard';

const AboutBridgeCare = () => {

    return (
        <div className='container'>
            <h1 className='heading'> About Bridge Care</h1>

            <div className='col-lg-12 col-md-12 col-12'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12'>
                        <p className='about-heading'>The BRIDGE network is powered by eDoctor </p>
                        <p className='text-justify'>
                            The largest healthcare network of licensed female doctors, who are present in
                            all provinces of Pakistan in addition to 24 other countries. The BRIDGE vision is
                            to improve the quality of life through connecting, counseling, and empowering all
                            elders who feel lonely due to their children not being in Pakistan. BRIDGE, through
                            its innovative approach, will enable a way for seniors to make the most of every day.
                            With a bi-monthly visit from the BRIDGE team and round-the-clock availability of family
                            physicians, they will be able to rely on complete management of their health records and
                            also provide outdoor help services in case of a clinical visit. BRIDGE will also provide
                            regular medicine reminders, blood testing, and delivery of medicine to their doorstep,
                            ensuring confidence and positivity in our beneficiaries.
                        </p>
                    </div>
                </div>

                <div className='row mt-5 mb-5'>
                    <div className='col-lg-4 d-flex'>
                        <AboutCard />
                    </div>

                    <div className='col-lg-4 d-flex'>
                        <AboutCard />
                    </div>

                    <div className='col-lg-4 d-flex '>
                        <AboutCard />
                    </div>

                    <div className='col-lg-4 d-flex mt-5'>
                        <AboutCard />
                    </div>

                    <div className='col-lg-4 d-flex mt-5'>
                        <AboutCard />
                    </div>

                    <div className='col-lg-4 d-flex mt-5'>
                        <AboutCard />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default AboutBridgeCare;