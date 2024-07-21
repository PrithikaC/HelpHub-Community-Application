import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Sidebar = ({ handleLogout }) => {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/account">My Account</Link>
                </li>
                <li>
                    <button onClick={handleLogout} className={styles.sidebar_btn}>Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
