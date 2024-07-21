import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const ServiceProviderSidebar = ({ handleLogout }) => {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li>
                    <Link to="/serviceProviderDashboard">Home</Link>
                </li>
                <li>
                    <Link to="/serviceProviderAccount">My Account</Link>
                </li>
                <li>
                    <Link to="/myServices">My Services</Link>
                </li>
                <li>
                    <Link to="/addService">Add Service</Link>
                </li>
                <li>
                    <Link to="/updateService">Update Service</Link>
                </li>
                <li>
                    <button onClick={handleLogout} className={styles.sidebar_btn}>Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default ServiceProviderSidebar;
