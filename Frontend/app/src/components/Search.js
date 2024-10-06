import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
  ]);
  const [isVisible, setIsVisible] = useState(true); // New state to control visibility
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
    setSearchTerm(''); // Clear input after search
  };

  const handleRecentSearchClick = search => {
    setSearchTerm(search);
  };

  const handleClose = () => {
    console.log('Closing search and going back');
    setIsVisible(false); // Hide the search component
    setSearchTerm(''); // Clear the search term
    navigate('/dashboard'); // Navigate to dashboard
  };

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      backgroundColor: '#f9f9f9',
    },
    searchBox: {
      backgroundColor: '#3C715D',
      borderRadius: '8px 0 0 8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      width: '500px',
      position: 'relative',
      display: 'flex',
    },
    searchBar: {
      display: 'flex',
      width: '100%',
      height: '100%', // Ensure it takes full height
      position: 'relative', // Positioning context for the close button
    },
    searchInput: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '8px 0 0 8px',
      width: '75%',
      margin: '0',
    },
    searchButton: {
      fontSize: '16px',
      color: 'white',
      backgroundColor: '#007bff',
      borderRadius: '0 8px 8px 0',
      cursor: 'pointer',
      width: '115px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1, // Ensure it appears below the close button
    },
    closeButton: {
      position: 'absolute',
      top: '0',
      right: '0',
      margin: '0', // No margin for absolute positioning
      fontSize: '16px',
      color: 'white',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      zIndex: 2, // Higher z-index to appear on top of the search button
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '0 0 8px 8px',
      maxHeight: '200px',
      overflowY: 'auto',
      zIndex: 1000,
    },
    dropdownItem: {
      padding: '10px',
      cursor: 'pointer',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '4px',
      margin: '5px 5px',
      transition: 'background-color 0.2s',
    },
    dropdownItemHover: {
      backgroundColor: '#f0f0f0',
    },
  };

  // If the component is not visible, return null (don't render anything)
  if (!isVisible) return null;

  return (
    <div style={styles.container}>
      <div style={styles.searchBox}>
        <form onSubmit={handleSearch} style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>
            Search
          </button>
          <button type="button" onClick={handleClose} style={styles.closeButton}>
            ✖
          </button>
        </form>
        <div style={styles.dropdown}>
          {recentSearches.map((search, index) => (
            <div
              key={index}
              style={styles.dropdownItem}
              onClick={() => handleRecentSearchClick(search)}
              onMouseEnter={e =>
                (e.currentTarget.style.backgroundColor =
                  styles.dropdownItemHover.backgroundColor)}
              onMouseLeave={e =>
                (e.currentTarget.style.backgroundColor = 'white')}
            >
              {search}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
