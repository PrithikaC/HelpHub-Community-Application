import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; 

const Account = () => {
    const [userEmail, setUserEmail] = useState(null);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token'); // Get token from localStorage

    useEffect(() => {
        const fetchUserEmail = async () => {
            if (!token) {
                setError('No token found in local storage.');
                return;
            }

            try {
                // Decode the token to get user ID
                const decodedToken = jwtDecode(token);
                const userId = decodedToken._id;

                // Fetch user details using the user ID
                const response = await fetch(`http://localhost:8080/api/users/${userId}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setUserEmail(data.email);
            } catch (error) {
                console.error("Error fetching user:", error);
                setError(`Error fetching user: ${error.message}`);
            }
        };

        fetchUserEmail();
    }, [token]);

    return (
        <div>
            <h1>User Email</h1>
            {error && <p>{error}</p>}
            {userEmail ? <p>Email: {userEmail}</p> : <p>Loading...</p>}
        </div>
    );
};

export default Account;
