import React, { useState } from 'react';
import styles from './styles.module.css'; // Import the CSS module

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className={styles.search_bar} onSubmit={handleSearch}>
            <input
                type="text"
                className={styles.search_input} // Use CSS module class
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className={styles.search_button}>Search</button>
        </form>
    );
};

export default SearchBar;
