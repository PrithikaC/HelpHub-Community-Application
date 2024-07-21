import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Corrected import
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ServUpdateProfile = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        serviceType: '',
        experience: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken._id;

                const fetchUserData = async () => {
                    try {
                        const response = await axios.get(`http://localhost:8080/api/serviceProvider/${userId}`);
                        setFormData({
                            firstName: response.data.firstName || '',
                            lastName: response.data.lastName || '',
                            email: response.data.email || '',
                            phoneNumber: response.data.phoneNumber || '',
                            city: response.data.city || '',
                            serviceType: response.data.serviceType || '',
                            experience: response.data.experience || ''
                        });
                    } catch (error) {
                        console.error('Error fetching user data:', error);
                    }
                };

                fetchUserData();
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value || '' // Default to empty string if value is undefined
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken._id;

                const response = await axios.post('http://localhost:8080/api/serviceProvider/updateProfile', {
                    _id: userId,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phoneNumber: formData.phoneNumber,
                    city: formData.city,
                    serviceType: formData.serviceType,
                    experience: formData.experience
                });

                if (response.data.success) {
                    alert('Profile updated successfully!');
                    navigate("/serviceProviderAccount");
                } else {
                    alert('Error updating profile: ' + response.data.message);
                }
            } catch (error) {
                console.error('Error updating profile:', error);
                alert('Error updating profile: ' + error.message);
            }
        }
    };

    const handleBack = () =>{
        navigate("/serviceProviderDashboard");
    }

    return (
        <div className="container mt-5">
            <div className="card shadow-lg rounded">
                <div className="card-header bg-dark-green text-white">
                    <h2 className="mb-0">Edit Profile</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control"
                                value={formData.firstName || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="form-control"
                                value={formData.lastName || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={formData.email || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                value={formData.phoneNumber || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="form-control"
                                value={formData.city || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="serviceType" className="form-label">Service Type:</label>
                            <input
                                type="text"
                                id="serviceType"
                                name="serviceType"
                                className="form-control"
                                value={formData.serviceType || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="experience" className="form-label">Experience (years):</label>
                            <input
                                type="number"
                                id="experience"
                                name="experience"
                                className="form-control"
                                value={formData.experience || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-warning">Update Profile</button>
                        <button onClick={handleBack} className='btn btn-secondary m-3'>Back</button>
                    </form>
                </div>
            </div>

            <style jsx>{`
                .bg-dark-green {
                    background-color: #004d00 !important; /* Dark green */
                }

                .btn-success {
                    background-color: #006400; /* Darker green for button */
                    border: none;
                    color: white;
                }

                .btn-success:hover {
                    background-color: #004d00; /* Even darker green for hover effect */
                }

                .form-control {
                    border-radius: 0.375rem; /* Rounded corners for inputs */
                }

                .card {
                    border: none;
                    border-radius: 0.75rem; /* Rounded corners for card */
                }

                .card-header {
                    border-bottom: 2px solid #006400; /* Darker green border */
                }

                .shadow-lg {
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
};

export default ServUpdateProfile;
