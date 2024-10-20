import React from "react";
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ManagePeople = () => {
  const people = [
    { id: 1, name: "Person_1", teams: ["Teams in", "Teams in", "Teams in"] },
    { id: 2, name: "Person_1", teams: ["Teams in", "Teams in", "Teams in"] },
    { id: 3, name: "Person_1", teams: ["Teams in", "Teams in", "Teams in"] },
    { id: 4, name: "Person_1", teams: ["Teams in", "Teams in", "Teams in"] },
    { id: 5, name: "Person_1", teams: ["Teams in", "Teams in", "Teams in"] },
    { id: 6, name: "Person_1", teams: ["Teams in", "Teams in", "Teams in"] },
  ];

  const containerStyle = {
    margin: '0 auto',
    padding: '2rem',
    
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0rem',
  };

  const headerTitleStyle = {
    fontSize: '2rem',
    fontWeight: 600,
    color: '#065f46', // Green color
  };

  const cardsContainerStyle = {
    display: 'grid',
   // gridTemplateColumns: 'repeat(3, 1fr)', // Adjust to show 3 cards per row
    gap: '3rem', // Reduced gap between cards
    justifyItems: 'center', // Center align each card
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  };

  const cardStyle = {
    backgroundColor: 'white',
    border: '1px solid #065f46', // Lighter green border
    padding: '1rem', // Reduce padding for smaller box
    width: '180px', // Slightly wider to fit the name and logo on the same line
    height: '120px', // Adjusted height
    borderRadius: '0.5rem',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const avatarAndNameStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    justifyContent: 'flex-start',
  };

  const avatarStyle = {
    backgroundColor: '#d1d5db', // Gray color
    borderRadius: '50%',
    height: '40px', // Smaller avatar
    width: '40px',
    marginRight: '0.25rem',
  };

  const cardTitleStyle = {
    fontSize: '1rem', // Reduce font size
    fontWeight: 500,
    color: '#065f46',
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '4rem',
    color: '#4b5563', // Text gray
    fontSize: '0.75rem', // Smaller font size for teams
    textAlign: 'left', // Align text to the left
    width: '100%', // Ensure list takes full width
    margin: '0', // Remove default margin
  };

  const lineStyle = {
    margin: '2rem 0', // Adjusts the spacing around the line
    border: 'none', // Removes default border
    borderTop: '1px solid #065f46', // Adds a green line
};

const iconStyle = {
    fontSize: '2rem', // Adjust icon size
    marginRight: '1rem', // Space between icon and text
    verticalAlign: 'middle',
  };

  return (
    
    <div style={containerStyle}>
      {/* Header Section */}
      <h1  style={{ color: '#16423C' }}>Settings</h1>
      <div style={headerStyle}>
        <FontAwesomeIcon icon={faUsers} size="2x" color="#065f46" style={iconStyle}/> {/* Group icon */}
        <h1 style={headerTitleStyle}>Manage People</h1>
      </div>

      {/* <hr style={lineStyle} /> */}

      {/* Cards Section */}
      <div style={cardsContainerStyle}>
        {people.map((person) => (
          <div key={person.id} style={cardStyle}>
            <div style={avatarAndNameStyle}>
              <div style={avatarStyle}></div>
              <h2 style={cardTitleStyle}>{person.name}</h2>
            </div>
            <ul style={listStyle}>
              {person.teams.map((team, index) => (
                <li key={index}>{team}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePeople;
