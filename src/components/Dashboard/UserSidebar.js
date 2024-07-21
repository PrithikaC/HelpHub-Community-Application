import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const UserSidebar = ({ handleLogout }) => {
    return (
        <div className={styles.sidebar}>
            <h2 className={styles.sidebar_header}>HelpHub Community</h2>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/useraccount">My Account</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </div>
    );
};

export default UserSidebar;
