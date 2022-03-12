import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import { Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';

const ContactUs = () => {
    return (
        <div className='container'>
            <h1 className='heading'> Contact Us </h1>
            <div className="row">
                <div className="col-sm-12">
                    <form className="md-float-material form-material">
                        <div className="auth-box card2">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="text-center"><i className="fa fa-phone-square text-primary f-56"></i></h3>
                                        <h3 className="text-center contact-us">Contact Us</h3>
                                        <h6 className="text-center respond">(we generally respond in 24 hours)</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mt-3 mb-3">

                                        <TextField
                                            fullWidth
                                            // error
                                            label="Name"
                                            id="outlined-size-small"
                                            defaultValue=""
                                            size="small"
                                        />
                                    </div>
                                    <div className="col-md-6 mt-3 mb-3">
                                        <TextField
                                            fullWidth
                                            // error
                                            label="Email"
                                            id="outlined-size-small"
                                            defaultValue=""
                                            size="small"
                                        />
                                        
                                    </div>
                                    <div className="col-md-12 mt-3 mb-3">
                                        <TextField
                                            fullWidth
                                            // error
                                            label="Message"
                                            id="outlined-size-small"
                                            defaultValue=""
                                            size="small"
                                        />
                                        
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12">

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            style={{ paddingLeft: '10px', backgroundColor: '#00bcd4' }}
                                            startIcon={<CallIcon />}
                                        >
                                            Contact
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row g-2">
                <div className="col-md-4">
                    <div className="card"> <img src="https://i.imgur.com/xuGJbnU.png" width="40" alt='img' />
                        <h5>Address</h5>
                        <p>NayaBazaar, Katmandu, Nepal</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card"> <img src="https://i.imgur.com/TNKflal.png" width="40" alt='img' />
                        <h5>Email</h5>
                        <p>contact@bbbootstrap.com</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card"> <img src="https://i.imgur.com/pZLFSO3.png" width="40" alt='img' />
                        <h5>Phone</h5>
                        <p>9854959754</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs