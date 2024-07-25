import React, { useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Adjust import to default import
import styles from './styles.module.css';
import UserSidebar from './UserSidebar';

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
            <header className={styles.header}>
                <h1>HelpHub</h1>
            </header>
            <div className={styles.main_content}>
                <UserSidebar handleLogout={handleLogout} />
                <div className={styles.content}>
                    {/* Add any additional content or components here */}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
