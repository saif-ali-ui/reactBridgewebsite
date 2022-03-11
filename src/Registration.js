// import react from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ElderlyIcon from '@mui/icons-material/Elderly';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Stack from '@mui/material/Stack';
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from '@material-ui/core';


const Registration = () => {
    const Input = styled('input')({
        display: 'none',
    });

    const captchaChange = () => {
        console.log("saif Ali");
    }
    return (
        <div className='container'>
            <h1 className='heading'> Registration</h1>
            <Button

                variant="contained"
                color="primary"
                style={{ paddingLeft: '10px', backgroundColor: '#00bcd4', marginLeft: '3px', marginRight: '3px' }}
                startIcon={<AccessibilityNewIcon />}
            >
                Join us as a Tele-Consultant
            </Button>

            <Button

                variant="contained"
                color="primary"
                style={{ paddingLeft: '10px', backgroundColor: '#00bcd4', marginLeft: '3px', marginRight: '3px' }}
                startIcon={<ElderlyIcon />}
            >
                Subscribe our BRIDGE Service
            </Button>

            <Button

                variant="contained"
                color="primary"
                style={{ paddingLeft: '10px', backgroundColor: '#00bcd4', marginLeft: '3px', marginRight: '3px' }}
                startIcon={<MedicalServicesIcon />}
            >
                Subscribe our Package
            </Button>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                </div>
            </Box>

            <div class="wrapper rounded bg-white">

                <div class="h3">Registration Form</div>
                <div class="form">
                    <div class="row">
                        <div class="col-md-12 mt-3 mb-3">
                            <TextField
                                fullWidth
                                label="PMDC No"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div class="col-md-6 mt-md-0 mt-3">
                            <TextField
                                fullWidth
                                label="First Name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div class="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                label="Last Name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div class="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                label="Email"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div class="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                label="Number"
                                type='number'
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div class="col-md-12 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                label="Are you eDoctor"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div class="col-md-12 mt-md-0 mt-3 mb-3">
                            <TextField
                                id="outlined-multiline-static"
                                label="Your Brief Profile"
                                multiline
                                fullWidth
                                defaultValue=""
                            />
                        </div>

                        <div class="col-md-6 mt-md-0 mt-3 mb-3 text-center">
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
                        style={{ paddingLeft: '10px', backgroundColor: '#00bcd4', marginLeft: '3px', marginRight: '3px' }}
                        startIcon={<CheckCircleIcon />}
                    >
                        Submit
                    </Button>
                </div>
            </div>


            <div class="wrapper rounded bg-white">

                <div class="h3">Subscribe our BRIDGE Service</div>
                <div class="form">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <TextField
                                fullWidth
                                label="Full Name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div class="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                label="Last Name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div class="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                label="Email"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div class="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                label="Number"
                                type='number'
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div class="col-md-12 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                label="Are you eDoctor"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div class="col-md-12 mt-md-0 mt-3 mb-3">
                            <TextField
                                id="outlined-multiline-static"
                                label="Your Brief Profile"
                                multiline
                                fullWidth
                                defaultValue=""
                            />
                        </div>

                        <div class="col-md-6 mt-md-0 mt-3 mb-3 text-center">
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
                        style={{ paddingLeft: '10px', backgroundColor: '#00bcd4', marginLeft: '3px', marginRight: '3px' }}
                        startIcon={<CheckCircleIcon />}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>


    )
}

export default Registration;