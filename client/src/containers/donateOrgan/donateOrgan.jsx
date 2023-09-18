import React from 'react';
import "./donateOrgan.css"
import Image3 from "../../images/img2.webp"
import { Box, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DonateOrgan = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    bloodType: '',
    age: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {}

  return (
    <Stack direction="column">
      <Box position="relative">
        <Box width="100" height="40rem" >
          <img src={Image3} style={{ objectFit: "cover" }} alt='userImage' width="100%" height="100%" />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "radial-gradient(80.99% 71.93% at 75.66% 19.72%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)",
              filter: "blur(2px)",
            }}
          >
          </Box>
        </Box>
        <Box position="absolute" display="flex" alignItems="center" flexDirection="column"
          sx={{ top: 0, left: 0 }} ml="5rem" mt="4rem">
          <Typography variant='h2' mt={15} width="80%" color="#fff" textAlign="center" sx={{
            fontFamily: "Sen",
            fontSize: "3.5rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "4rem",
            letterSpacing: "-0.125rem"
          }}>
            One organ donor can save eight lives and improve the lives of up to 75 people. Give the gift of life. Donate your organs.
          </Typography>
        </Box>
      </Box>
      <form onSubmit={submitHandler} className="form_container">
        <div className="title_container">
          <p className="title">Registration</p>
          <span className="subtitle">
            Get started with our app, just create an account and enjoy the
            experience.
          </span>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="input_container col-6 fn">
              <label className="input_label" htmlFor="name_field">
                First Name
              </label>
              <input
                placeholder="First Name"
                title="Enter full name"
                name="firstName"
                type="text"
                className="input_field"
                id="firstName"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input_container col-6 fn">
              <label className="input_label" htmlFor="name_field">
                Last Name
              </label>
              <input
                placeholder="Last Name"
                title="Enter full name"
                name="lastName"
                type="text"
                className="input_field"
                id="lastName"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input_container col-6 ma">
              <label className="input_label" htmlFor="email_field">
                Email
              </label>
              <input
                placeholder="name@mail.com"
                title="Enter mail id"
                name="email"
                type="email"
                className="input_field"
                id="email_field"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input_container col-6 ad">
              <label className="input_label" htmlFor="add_field">
                City
              </label>
              <input
                placeholder="City"
                title="Enter address"
                name="address"
                type="text"
                className="input_field"
                id="add_field"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="input_container col-6 bt">
              <label className="input_label" htmlFor="blood_field">
                Blood Type
              </label>
              <input
                placeholder="Blood Group"
                title="Enter blood type"
                name="bloodType"
                type="text"
                className="input_field"
                id="blood_field"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input_container col-6 un">
              <label className="input_label" htmlFor="age_field">
                Age
              </label>
              <input
                placeholder="Enter age"
                title="Enter age"
                name="age"
                type="text"
                className="input_field"
                id="age_field"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="input_container col-6 ps">
              <label className="input_label" htmlFor="password_field">
                Password
              </label>
              <input
                placeholder="Password"
                title="Enter password"
                name="password"
                type="password"
                className="input_field"
                id="password_field"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <button
          title="Sign Up"
          type="submit"
          className="sign-up_btn"
        >
          <span>Sign Up</span>
        </button>
        <Typography
          onClick={() => {
            navigate('/login');
          }}
          sx={{
            fontSize: '13px',
            '&:hover': { color: 'blue', cursor: 'pointer' },
          }}
        >
          Already have an account? Login Now
        </Typography>
      </form>
    </Stack>
  );
}