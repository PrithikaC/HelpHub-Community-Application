import React, { useEffect, useState } from 'react';
import styles from './ServiceProviderList.module.css'; // Create and style this CSS module as needed

const ServiceProviderList = () => {
    const [serviceProviders, setServiceProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServiceProviders = async () => {
            try {
                const response = await fetch('/api/serviceProviders'); // Adjust the endpoint as needed
                const data = await response.json();
                setServiceProviders(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch service providers');
                setLoading(false);
            }
        };

        fetchServiceProviders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.container}>
            <h2>Service Providers</h2>
            <ul className={styles.list}>
                {serviceProviders.map((provider) => (
                    <li key={provider._id} className={styles.item}>
                        <h3>{provider.firstName} {provider.lastName}</h3>
                        <p>Service Type: {provider.serviceType}</p>
                        <p>City: {provider.city}</p>
                        <p>Experience: {provider.experience} years</p>
                        <p>Email: {provider.email}</p>
                        <p>Phone: {provider.phoneNumber}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceProviderList;
