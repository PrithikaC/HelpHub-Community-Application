import React, { useState } from 'react'; // Ensure hooks are imported
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const ServiceProviderList = ({ providers }) => {
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = (provider) => {
        setSelectedProvider(provider);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedProvider(null);
        setShowModal(false);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Service Providers</h2>
            <div className="row">
                {providers.map((provider) => (
                    <div key={provider._id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{provider.firstName} {provider.lastName}</h5>
                                <p className="card-text"><strong>Service Type:</strong> {provider.serviceType}</p>
                                <p className="card-text"><strong>City:</strong> {provider.city}</p>
                                <p className="card-text"><strong>Experience:</strong> {provider.experience} years</p>
                                <p className="card-text"><strong>Email:</strong> {provider.email}</p>
                                <p className="card-text"><strong>Phone:</strong> {provider.phoneNumber}</p>
                                <Button 
                                    variant="primary" 
                                    onClick={() => handleShowModal(provider)}
                                >
                                    Avail Service
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProvider && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Request Service</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>{selectedProvider.firstName} {selectedProvider.lastName}</h5>
                        <p><strong>Service Type:</strong> {selectedProvider.serviceType}</p>
                        <p><strong>City:</strong> {selectedProvider.city}</p>
                        <p><strong>Experience:</strong> {selectedProvider.experience} years</p>
                        <p><strong>Email:</strong> {selectedProvider.email}</p>
                        <p><strong>Phone:</strong> {selectedProvider.phoneNumber}</p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Your Request</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => alert('Service requested!')}>
                            Send Request
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default ServiceProviderList;
