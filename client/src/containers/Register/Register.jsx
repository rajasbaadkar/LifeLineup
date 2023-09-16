import React from 'react'
import "./register.css"
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import { Select, MenuItem } from '@mui/material';

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Others', value: 'others' },
];

const Register = () => {
   const submitHandler = (e) =>{}
   const navigate = useNavigate();
   const [gender, setGender] = React.useState('');

   const handleChange = (event) => {
    setGender(event.target.value); 
  };
  return (
    <section id="login-box">
        <form onSubmit={submitHandler} className="form_container">

            <div className="title_container">
                <p className="title">Registration</p>
                <span className="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
            </div>

            <div className="container-fluid">

                <div className="row">
                    <div className="input_container col-6 fn">
                        <label className="input_label" for="name_field">Full Name</label>
                        <input placeholder="Full Name" title="Enter full name" name="input_name" type="text"
                            className="input_field" id="name_field" autocomplete="off"/>
                    </div>

                    <div className="input_container col-6 ma">
                        <label className="input_label" for="email_field">Email</label>
                        <input placeholder="name@mail.com" title="Enter mail id" name="input_mail" type="email"
                            className="input_field" id="email_field" autocomplete="off"/>
                    </div>
                </div>

                <div className="row">
                    <div className="input_container col-6 pn">
                        <label className="input_label" for="number_field">Phone Number</label>
                        <input placeholder="Phone Number" title="Enter phone number" name="input_number" type="text"
                            className="input_field" id="number_field" autocomplete="off"/>
                    </div>

                    <div className="input_container col-6 ad">
                        <label className="input_label" for="add_field">Address</label>
                        <input placeholder="Address" title="Enter address" name="input_address" type="text"
                            className="input_field" id="add_field" autocomplete="off"/>
                    </div>
                </div>

                <div className="row">
                    <div className="input_container col-6 bt">
                        <label className="input_label" for="blood_field">Blood Type</label>
                        <input placeholder="Blood Group" title="Enter blood type" name="input_blood" type="text"
                            className="input_field" id="blood_field" autocomplete="off"/>
                    </div>

                    <div className="input_container col-6 un">
                        <label className="input_label" for="age_field">Age</label>
                        <input placeholder="Enter age" title="Enter age" name="input_age" type="text"
                            className="input_field" id="age_field" autocomplete="off"/>
                    </div>
                </div>

                <div className="row">
                    {/* <div className="input_container col-6 un">
                        <label className="input_label" for="gender_field">Gender</label>
                        <input placeholder="name@mail.com" title="Enter mail id" name="input_gender" type="text"
                            className="input_field" id="gender_field" autocomplete="off"/>
                    </div> */}
                    <div className="input_container col-6 gd">
                    <label className="input_label" for="gender_field">Gender</label>

                    <Select
                        name="input_gender"
                        id="gender_field"
                        value={gender}
                        onChange={handleChange}
                        sx={{ width: '100%', height:"2.4rem",paddingX:"28px" }}
                    >
                        {genderOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </Select>
                    </div>

                    <div className="input_container col-6 ps">
                        <label className="input_label" for="age_field">Password</label>
                        <input placeholder="Password" title="Enter password" name="input_pass" type="password"
                            className="input_field" id="password_field" autocomplete="off"/>
                    </div>
                </div>

            </div>

            <button title="Sign Up" type="submit" className="sign-up_btn" >
                <span>Sign Up</span>
            </button>

            <Typography onClick={()=>{navigate("/login")}} sx={{fontSize:"13px", "&:hover":{color:"blue", cursor:"pointer"}}}>
                Already have an account? Login Now
            </Typography>

        </form>
    </section>
  )
}

export default Register
