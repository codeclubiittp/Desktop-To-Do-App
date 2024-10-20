import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(true); // Control visibility of the component
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClose = () => {
    setIsVisible(false); // Hide the search component
    setSearchTerm(''); // Clear the search term
    navigate('/dashboard'); // Navigate to the dashboard
  };

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    searchBox: {
      backgroundColor: '#335a4f', // Dark green background
      borderRadius: '8px', // Fully rounded corners
      width: '400px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      padding: '10px',
    },
    searchBar: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
    },
    searchInput: {
      width: '100%',
      padding: '10px',
      border: 'none',
      borderRadius: '8px', // Rounded corners
      fontSize: '16px',
      backgroundColor: '#f4f4f4', // Light background for input field
      color: '#333', // Darker text for readability
    },
    closeButton: {
      position: 'absolute',
      right: '10px',
      top: '10px',
      fontSize: '16px',
      backgroundColor: 'black-light',
      border: 'none',
      cursor: 'pointer',
      color: 'black',
    },
    menuList: {
      listStyle: 'none',
      padding: '0',
      margin: '20px 0 0',
      maxHeight: '200px', // Limit the height to allow scrolling
      overflowY: 'auto', // Enable vertical scrolling
    },
    menuItem: {
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      borderBottom: '1px solid #ccc',
      transition: 'background-color 0.2s',
    },
    menuItemIcon: {
      marginRight: '10px',
    },
    menuItemText: {
      color: '#fff',
    },
    // Scrollbar styles for WebKit browsers (Chrome, Safari)
     scrollBar: {
 overflowY: 'auto', // Enable scrolling
  scrollbarWidth: 'thin', // Thin scrollbar for Firefox
  scrollbarColor: '#ffffff #335a4f', // Custom color for Firefox (thumb, track)
  paddingRight: '10px', // Add space between the content and the scrollbar
  borderRadius: '10px', // Border radius for the entire scrollbar container (in Firefox)
    },
    scrollBarWebkit: {
      '::-webkit-scrollbar': {
        width: '5px', // Slightly thicker scrollbar for better visibility
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: '#ffffff', // White scrollbar thumb
        borderRadius: '8px', // Rounded corners for the scroll thumb
      },
      '::-webkit-scrollbar-track': {
        backgroundColor: '#335a4f', // Dark green background for scrollbar track
        borderRadius: '8px', // Rounded corners for track as well
      },
    },

  };

  // If the component is not visible, return null (don't render anything)
  if (!isVisible) return null;

  return (
    <div style={styles.container}>
      <div style={styles.searchBox}>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            style={styles.searchInput}
          />
          <button type="button" onClick={handleClose} style={styles.closeButton}>
            ✖
          </button>
        </div>

        {/* Menu Items */}
        <ul style={{ ...styles.menuList, ...styles.scrollBar }}>
          <li style={styles.menuItem}>
            <span style={styles.menuItemIcon}>📥</span>
            <span style={styles.menuItemText}>Inbox</span>
          </li>
          <li style={styles.menuItem}>
            <span style={styles.menuItemIcon}>📅</span>
            <span style={styles.menuItemText}>Upcoming</span>
          </li>
          <li style={styles.menuItem}>
            <span style={styles.menuItemIcon}>📆</span>
            <span style={styles.menuItemText}>Today</span>
          </li>
          <li style={styles.menuItem}>
            <span style={styles.menuItemIcon}>🏷️</span>
            <span style={styles.menuItemText}>Labels</span>
          </li>
          {/* Repeat for more items to test scrolling */}
          <li style={styles.menuItem}>
            <span style={styles.menuItemIcon}>📥</span>
            <span style={styles.menuItemText}>Inbox</span>
          </li>
          <li style={styles.menuItem}>
            <span style={styles.menuItemIcon}>📅</span>
            <span style={styles.menuItemText}>Upcoming</span>
          </li>
          <li style={styles.menuItem}>
            <span style={styles.menuItemIcon}>📆</span>
            <span style={styles.menuItemText}>Today</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
