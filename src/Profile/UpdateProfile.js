import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const UpdateProfile = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: ''
    });

    useEffect(() => {
        // Fetch the token from local storage
        const token = localStorage.getItem('token');
        if (token) {
            try {
                // Decode the token to get the user ID
                const decodedToken = jwtDecode(token);
                const userId = decodedToken._id;

                // Fetch user data from the server using the user ID
                const fetchUserData = async () => {
                    try {
                        const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
                        setFormData({
                            firstname: response.data.firstName,
                            lastname: response.data.lastName,
                            email: response.data.email
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
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Fetch the token from local storage
        const token = localStorage.getItem('token');
        if (token) {
            try {
                // Decode the token to get the user ID
                const decodedToken = jwtDecode(token);
                const userId = decodedToken._id;

                // Send the updated data to the server
                const response = await axios.post('http://localhost:8080/api/users/updateProfile', {
                    _id: userId,
                    ...formData
                });

                if (response.data.success) {
                    alert('Profile updated successfully!');
                } else {
                    alert('Error updating profile: ' + response.data.message);
                }
            } catch (error) {
                console.error('Error updating profile:', error);
            }
        }
    };

    return (
        <div>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default UpdateProfile;
