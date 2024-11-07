import React from 'react';
import './Card.css'; 

const EventCard = ({ eventTitle, startTime,endTime, users, bgColor, borderColor }) => {
  return (
    <div
      className="event-card"
      style={{
        backgroundColor: bgColor,
        border: `2px solid ${borderColor}`,
        borderRadius: '8px',
        padding: '8px',
        margin: '4px 0', 
      }}
    >
      <div className="event-time-buttons">
        <button className="time-button">{startTime}</button>
        <span style={{ margin: '0 4px' }}> - </span>
        <button className="time-button">{endTime}</button>
      </div>
      <h4 className="event-title">{eventTitle}</h4>
      <div className="event-users">
        {users.map((user, index) => (
          <div key={index} className="user-avatar">
            <img src={user.avatar} alt={user.name} className="avatar" />
            <span className="user-name">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
