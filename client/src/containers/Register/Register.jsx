import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { Select, MenuItem } from '@mui/material';

const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
];

const Register = () => {
    const navigate = useNavigate();
    const [gender, setGender] = useState('');
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

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            // Create an object with the form data
            const userData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                city: formData.address,
                bloodType: formData.bloodType,
                age: formData.age,
                gender: gender,
                password: formData.password,
            };

            // Simulate sending data to a backend (replace with your actual backend URL)
            await axios.post('http://localhost:4000/auth/register', userData);

            // Handle the response from the backend as needed
            console.log('Registration successful');

            // Redirect the user to the login page after successful registration
            navigate('/login');
        } catch (error) {
            // Handle errors, e.g., display an error message to the user
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <div className='bg-img'>
            <Box sx={{ padding: '7rem 5rem 3rem 5rem' }}>
                <section id="login-box">
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
                                <div className="input_container col-6 gd">
                                    <label className="input_label" htmlFor="gender_field">
                                        Gender
                                    </label>
                                    <Select
                                        name="gender"
                                        id="gender_field"
                                        value={gender}
                                        onChange={handleChange}
                                        sx={{ width: '100%', height: '2.4rem', paddingX: '28px' }}
                                    >
                                        {genderOptions.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
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
                </section>
            </Box>
        </div>
    );
};

export default Register;
