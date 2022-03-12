import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from '@material-ui/core';


const JoinUsTele = () => {

    const Input = styled('input')({
        display: 'none',
    });

    const captchaChange = () => {
        console.log("saif Ali");
    }
    return (
        <div className="wrapper rounded bg-white">
            <div className="h3">Registration Form tele</div>
            <div className="form">
                <div className="row">
                    <div className="col-md-12 mt-3 mb-3">
                        <TextField
                            fullWidth
                            label="PMDC No"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div className="col-md-6 mt-md-0 mt-3">
                        <TextField
                            fullWidth
                            label="First Name"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div className="col-md-6 mt-md-0 mt-3 mb-3">
                        <TextField
                            fullWidth
                            label="Last Name"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div className="col-md-6 mt-md-0 mt-3 mb-3">
                        <TextField
                            fullWidth
                            label="Email"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div className="col-md-6 mt-md-0 mt-3 mb-3">
                        <TextField
                            fullWidth
                            label="Number"
                            type='number'
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div className="col-md-12 mt-md-0 mt-3 mb-3">
                        <TextField
                            fullWidth
                            label="Are you eDoctor"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div className="col-md-12 mt-md-0 mt-3 mb-3">
                        <TextField
                            id="outlined-multiline-static"
                            label="Your Brief Profile"
                            multiline
                            fullWidth
                            defaultValue=""
                        />
                    </div>

                    <div className="col-md-6 mt-md-0 mt-3 mb-3 text-center">
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label align="center" htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                <Button color="primary" variant="contained" component="span">
                                    Upload Image
                                </Button>
                            </label>

                        </Stack>
                    </div>
                </div>
                <ReCAPTCHA align="center"
                    sitekey="Your client site key"
                    onChange={captchaChange}
                />

                <Button
                    variant="contained"
                    color="primary"
                    style={{ paddingLeft: '10px', backgroundColor: '#00bcd4', marginLeft: '3px', marginRight: '3px', marginTop: '10px' }}
                    startIcon={<CheckCircleIcon />}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default JoinUsTele