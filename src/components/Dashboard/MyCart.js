import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCart = () => {
    const [bookedServices, setBookedServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookedServices = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/bookedServices');
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                setBookedServices(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBookedServices();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">My Cart</h2>
            <h1>MY CAR</h1>
            <div className="row">
                {bookedServices.length > 0 ? (
                    bookedServices.map((service) => (
                        <div key={service._id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{service.serviceProviderName}</h5>
                                    <p className="card-text"><strong>Service Type:</strong> {service.serviceType}</p>
                                    <p className="card-text"><strong>Message:</strong> {service.message}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No services booked yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyCart;
