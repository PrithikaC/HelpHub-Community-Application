import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const UserSidebar = ({ handleLogout }) => {
    return (
        <div className={styles.sidebar}>
          
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/useraccount">My Account</Link></li>
                <li><Link to="/usercart">My Cart</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
            
           
        </div>
    );
};

export default UserSidebar;
