import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const [userDetails, setUserDetails] = useState({
        email: null,
        firstName: null,
        lastName: null
    });
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (!token) {
                setError('No token found in local storage.');
                navigate('/login');
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
                    lastName: data.lastName
                });
            } catch (error) {
                console.error("Error fetching user:", error);
                setError(`Error fetching user: ${error.message}`);
                navigate('/login');
            }
        };

        fetchUserDetails();
    }, [token, navigate]);

    const handleEditClick = () => {
        navigate('/updateProfile');
    };

    return (
        <div>
            <h1>User Details</h1>
            {error && <p>{error}</p>}
            {userDetails.email ? (
                <div>
                    <p>First Name: {userDetails.firstName}</p>
                    <p>Last Name: {userDetails.lastName}</p>
                    <p>Email: {userDetails.email}</p>
                    <button onClick={handleEditClick} className="btn btn-primary">Edit</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Account;
