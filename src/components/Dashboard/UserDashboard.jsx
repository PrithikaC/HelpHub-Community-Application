import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Ensure jwt-decode is imported correctly
import styles from './styles.module.css';
import UserSidebar from './UserSidebar';
import SearchBar from './SearchBar';
import ServiceProviderList from './ServiceProviderList';

const UserDashboard = () => {
    const token = localStorage.getItem("token");
    const [serviceProviders, setServiceProviders] = useState([]);
    const [filteredProviders, setFilteredProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

        const fetchServiceProviders = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/serviceProvider');
                if (!response.ok) {
                    throw new Error('Failed to fetch service providers');
                }
                const data = await response.json();
                setServiceProviders(data);
                setFilteredProviders(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchServiceProviders();
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    const handleSearch = (query) => {
        const filtered = serviceProviders.filter(provider =>
            provider.serviceType.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProviders(filtered);
    };
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.main_container}>
            <header className={styles.header}>
                <h1 className={styles.header_title}>HelpHub</h1>
                <div className={styles.search_bar_container}>
                    <SearchBar onSearch={handleSearch} />
                </div>
            </header>
            <div className={styles.main_content}>
                <UserSidebar handleLogout={handleLogout} />
                <div className={styles.content}>
                    <ServiceProviderList providers={filteredProviders} />
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
