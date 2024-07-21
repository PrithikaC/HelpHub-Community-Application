import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // Correct import
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserAccount = () => {
    const [userDetails, setUserDetails] = useState({
        email: null,
        firstName: null,
        lastName: null,
        phoneNumber: null,
        address: null
    });
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (!token) {
                setError('No token found in local storage.');
                navigate('/loginUser');
                return;
            }

            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken._id;

                const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
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
                    address: data.address
                });
            } catch (error) {
                console.error("Error fetching user:", error);
                setError(`Error fetching user: ${error.message}`);
                navigate('/loginUser');
            }
        };

        fetchUserDetails();
    }, [token, navigate]);

    const handleEditClick = () => {
        navigate('/userUpdateProfile');
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center text-dark-green">User Details</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {userDetails.email ? (
                <div className="card border-dark-green shadow-lg rounded mb-4">
                    <div className="card-body">
                        <h5 className="card-title text-dark-green mb-4">Profile Information</h5>
                        <p className="card-text"><strong>First Name:</strong> {userDetails.firstName}</p>
                        <p className="card-text"><strong>Last Name:</strong> {userDetails.lastName}</p>
                        <p className="card-text"><strong>Email:</strong> {userDetails.email}</p>
                        <p className="card-text"><strong>Phone Number:</strong> {userDetails.phoneNumber}</p>
                        <p className="card-text"><strong>Address:</strong> {userDetails.address}</p>
                        <button onClick={handleEditClick} className="btn btn-dark-green btn-lg">Edit Profile</button>
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

export default UserAccount;
