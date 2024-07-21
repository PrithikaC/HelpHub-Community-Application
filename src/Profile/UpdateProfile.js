import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = useCallback(async (token) => {
    try {
      const response = await fetch('http://localhost:8080/api/users/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch user data');

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    fetchUserData(token);
  }, [fetchUserData, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Account Page</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">User Information</h5>
          <p className="card-text"><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <button className="btn btn-primary" onClick={() => navigate('/update-profile')}>Update Profile</button>
          <button className="btn btn-secondary ml-2" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
