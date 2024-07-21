import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Correct import
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceProviderAccount = () => {
    const [userDetails, setUserDetails] = useState({
        email: null,
        firstName: null,
        lastName: null,
        phoneNumber: null,
        city: null,
        serviceType: null,
        experience: null
    });
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (!token) {
                setError('No token found in local storage.');
                navigate('/loginServ');
                return;
            }

            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken._id;

                const response = await fetch(`http://localhost:8080/api/serviceProvider/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Fetched user details:', data);

                setUserDetails({
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phoneNumber: data.phoneNumber,
                    city: data.city,
                    serviceType: data.serviceType,
                    experience: data.experience
                });
            } catch (error) {
                console.error("Error fetching user:", error);
                setError(`Error fetching user: ${error.message}`);
                navigate('/loginServ');
            }
        };

        fetchUserDetails();
    }, [token, navigate]);

    const handleEditClick = () => {
        navigate('/servUpdateProfile');
    };

    const handleBack = () =>{
        navigate("/serviceProviderDashboard")
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center text-dark-green">Service Provider Details</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {userDetails.email ? (
                <div className="card border-dark-green shadow-lg rounded mb-4">
                    <div className="card-body">
                        <h5 className="card-title text-dark-green mb-4">Profile Information</h5>
                        <p className="card-text"><strong>First Name:</strong> {userDetails.firstName}</p>
                        <p className="card-text"><strong>Last Name:</strong> {userDetails.lastName}</p>
                        <p className="card-text"><strong>Email:</strong> {userDetails.email}</p>
                        <p className="card-text"><strong>Phone Number:</strong> {userDetails.phoneNumber}</p>
                        <p className="card-text"><strong>City:</strong> {userDetails.city}</p>
                        <p className="card-text"><strong>Service Type:</strong> {userDetails.serviceType}</p>
                        <p className="card-text"><strong>Experience:</strong> {userDetails.experience} years</p>
                        <button onClick={handleEditClick} className="btn btn-dark-green btn-lg">Edit Profile</button>
                        <button onClick={handleBack} className="btn btn-secondary m-3 btn-lg">Back</button>
                    </div>
                </div>
            ) : (
                <p className="text-center">Loading...</p>
            )}
            <style jsx>{`
                .text-dark-green {
                    color: #004d00; /* Dark green color for text */
                }

                .border-dark-green {
                    border-color: #004d00 !important; /* Dark green border for card */
                }

                .btn-dark-green {
                    background-color: #004d00; /* Dark green background for button */
                    border: none;
                    color: white;
                }

                .btn-dark-green:hover {
                    background-color: #003300; /* Even darker green for hover effect */
                    color:white;
                }

                .shadow-lg {
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .rounded {
                    border-radius: 0.75rem; /* Rounded corners for card */
                }
            `}</style>
        </div>
    );
};

export default ServiceProviderAccount;
