import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceProviderList = () => {
    const [serviceProviders, setServiceProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServiceProviders = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/serviceProvider');
                if (!response.ok) {
                    throw new Error('Failed to fetch service providers');
                }
                const data = await response.json();
                setServiceProviders(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchServiceProviders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Service Providers</h2>
            <div className="row">
                {serviceProviders.map((provider) => (
                    <div key={provider._id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{provider.firstName} {provider.lastName}</h5>
                                <p className="card-text"><strong>Service Type:</strong> {provider.serviceType}</p>
                                <p className="card-text"><strong>City:</strong> {provider.city}</p>
                                <p className="card-text"><strong>Experience:</strong> {provider.experience} years</p>
                                <p className="card-text"><strong>Email:</strong> {provider.email}</p>
                                <p className="card-text"><strong>Phone:</strong> {provider.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceProviderList;
