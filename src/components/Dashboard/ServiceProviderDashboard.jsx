import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';  // Adjust import to named import
import styles from './styles.module.css';

const ServiceProviderDashboard = () => {
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                console.log(decodedToken);
            } catch (error) {
                console.error("Failed to decode token:", error);
            }
        } else {
            console.log("No token found in local storage.");
        }
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
                <Link to="/serviceProvideraccount">Account</Link>
            </nav>
        </div>
    );
};

export default ServiceProviderDashboard;