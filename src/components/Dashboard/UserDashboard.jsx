import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Ensure you import correctly
import styles from './styles.module.css';
import UserSidebar from './UserSidebar';
import SearchBar from './SearchBar';

const UserDashboard = () => {
    const token = localStorage.getItem("token");
    const [searchResults, setSearchResults] = useState([]);

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
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`/api/search?query=${query}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const results = await response.json();
            setSearchResults(results);
        } catch (error) {
            console.error("Failed to fetch search results:", error);
        }
    };

    return (
        <div className={styles.main_container}>
            <header className={styles.header}>
                <h1>HelpHub</h1>
            </header>
            <div className={styles.main_content}>
                <UserSidebar handleLogout={handleLogout} />
                <div className={styles.content}>
                    <ServiceProviderList />
                </div>
                <div className={styles.content}>
                    <SearchBar onSearch={handleSearch} />
                    {/* Display search results here */}
                    <div>
                        {searchResults.length > 0 ? (
                            searchResults.map(result => (
                                <div key={result._id}>{result.name}</div>
                            ))
                        ) : (
                            <div>No results found</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
