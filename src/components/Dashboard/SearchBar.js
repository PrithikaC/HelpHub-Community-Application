import React, { useState } from 'react';
import './styles.module.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className="form-inline search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                className="form-control mr-sm-2"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-outline-success">Search</button>
        </form>
    );
};

export default SearchBar;
