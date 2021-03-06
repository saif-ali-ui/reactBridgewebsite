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
import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { useState } from 'react';


const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }),
);

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
};

const Registration = () => {

    const Input = styled('input')({
        display: 'none',
    });

    const captchaChange = () => {
        console.log("saif Ali");
    }

    const [userReg, setUserReg] = useState({
        fname: "",
        lname: "",
        pmdc: 0,
        email: "",
        number: 0,
        desc: ""
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserReg({ ...userReg, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault();

        const { fname, lname, pmdc, email, number, desc } = userReg;

        if (fname && lname && pmdc && email && number && desc) {
            const response = await fetch("https://reactbridgeweb-default-rtdb.firebaseio.com/bridgeuserdataform.json",
                {
                    method: "POST",
                    Headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        fname,
                        lname,
                        pmdc,
                        email,
                        number,
                        desc
                    }),
                }
            );
            if (response) {
                setUserReg({
                    fname: "",
                    lname: "",
                    pmdc: 0,
                    email: "",
                    number: 0,
                    desc: ""
                });
                alert("Yourform submitted")

            }
            else {
                alert("your form is not submitted")
            }
        }
        else {
            alert("Please Fill the All The Data")
        }



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

            <div className="wrapper rounded bg-white">

                <div className="h3">Registration Form</div>
                <form className="form" method="POST">
                    <div className="row">
                        <div className="col-md-12 mt-3 mb-3">
                            <TextField
                                fullWidth
                                name='pmdc'
                                value={userReg.pmdc}
                                label="PMDC No"
                                type='number'
                                id="outlined-size-small"
                                defaultValue="unkonown"
                                size="small"
                                onChange={getUserData}
                                required
                            />
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3">
                            <TextField
                                fullWidth
                                name='fname'
                                value={userReg.fname}
                                label="First Name"
                                id="outlined-size-small"
                                defaultValue="unkonown"
                                size="small"
                                onChange={getUserData}
                            />
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                name='lname'
                                value={userReg.lname}
                                label="Last Name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={getUserData}
                            />
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                name='email'
                                value={userReg.email}
                                label="Email"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={getUserData}
                            />
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                name='number'
                                value={userReg.number}
                                label="Number"
                                type='number'
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={getUserData}
                            />
                        </div>
                        <div className="col-md-12 mt-md-0 mt-3 mb-3">
                            <TextField
                                name='desc'
                                value={userReg.desc}
                                id="outlined-multiline-static"
                                label="Your Brief Profile"
                                multiline
                                fullWidth
                                defaultValue=""
                                onChange={getUserData}
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
                        type='submit'
                        variant="contained"
                        color="primary"
                        style={{ paddingLeft: '10px', backgroundColor: '#00bcd4', marginLeft: '3px', marginRight: '3px', marginTop: '10px' }}
                        startIcon={<CheckCircleIcon />}
                        onClick={postData}

                    >
                        Submit
                    </Button>
                </form>
            </div>


            <div className="wrapper rounded bg-white">

                <div className="h3">Subscribe our BRIDGE Service</div>
                <div className="form">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <TextField
                                fullWidth
                                label="Full Name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                // error
                                label="Email"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3 mb-3">
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />

                                </RadioGroup>
                            </FormControl>
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
                        <div className="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                label="WhatsApp Number"
                                type='number'
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                // error
                                label="City"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>
                        <div className="col-md-12 mt-md-0 mt-3 mb-3">
                            <TextField
                                fullWidth
                                // error
                                label="CityState / Province"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                            />
                        </div>

                        <div className="col-md-12 mt-md-0 mt-3 mb-3 text-center">
                            <FormLabel id="demo-row-radio-buttons-group-label">Please select the service you want</FormLabel>
                            <div className='row'>
                                <div className='col-md-6 mt-md-0 mt-3 mb-3'>
                                    <FormGroup style={{ textAlign: 'left' }}>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Outdoor Help Service" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="BRIDGE Dr. Home Visitl" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Caregiver Home Visit" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Care Coordinator Home Visit" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Home Nursing Service" />
                                    </FormGroup>
                                </div>
                                <div className='col-md-6 mt-md-0 mt-3 mb-3'>
                                    <FormGroup style={{ textAlign: 'left' }}>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Home Physiotherapist" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Home X ray" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Home ECG" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Home Ultrasound" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Arranging Consultant / General Physician" />
                                    </FormGroup>
                                </div>
                            </div>

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

        </div>



    )
}

export default Registration;