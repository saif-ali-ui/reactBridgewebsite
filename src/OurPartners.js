import React from 'react'
import OurPartnersData from './OurPartnerObj';

const OurPartners = () => {
    return (
        <div className='container'>
            <h1 className='heading'> Our Partners </h1>
            <div className="row">
                {
                    OurPartnersData.map((data) => {
                        let { id, image, link } = data;

                        return (

                            <div className="col-lg-3" key={id}>
                                <div className="our-partner">
                                    <a href={link} >
                                        <img href="www.google.com" src={image} className="" width="250" height="100" alt='img' />
                                    </a>
                                </div>
                            </div>

                        );
                    })

                }
            </div>
        </div>

    )
}

export default OurPartners;