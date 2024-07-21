import React, { useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import Sidebar from '../Common/Sidebar';
import styles from '../Common/styles.module.css';

const UserDashboard = () => {
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
            <Sidebar handleLogout={handleLogout} />
            <div className={styles.content}>
                <header className={styles.header}>
                    <h1>HelpHub Community</h1>
                </header>
                {/* Add any additional content or components here */}
            </div>
        </div>
    );
};

export default UserDashboard;
