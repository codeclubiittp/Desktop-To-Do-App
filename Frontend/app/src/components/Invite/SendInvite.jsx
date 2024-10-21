import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faCopy } from '@fortawesome/free-solid-svg-icons';
import './SendInvite.css';

const SharingComponent = () => {
  const [users, setUsers] = useState([
    { email: 'user1@gmail.com' },
    { email: 'user2@gmail.com' },
    { email: 'user3@gmail.com', access: 'View' },
    { email: 'user4@gmail.com', access: 'View' },
    { email: 'user5@gmail.com', access: 'View' },
    { email: 'user6@gmail.com', access: 'View' },
    { email: 'user7@gmail.com', access: 'View' }
  ]);

  const [linkAccess, setLinkAccess] = useState('View');
  const [showList, setShowList] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAccessChange = (index, newAccess) => {
    const updatedUsers = [...users];
    updatedUsers[index].access = newAccess;
    setUsers(updatedUsers);
  };

  const handleRemoveUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleLinkAccessChange = (newAccess) => {
    setLinkAccess(newAccess);
  };

  const handleSendInvite = () => {
    alert('Invites Sent!');
  };

  const handleCopyLink = () => {
    alert('Link Copied!');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter users based on the search term
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sharing-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="send-invite-button" onClick={handleSendInvite}>
          Send Invite
        </button>
      </div>

      {showList && (
        <div>
          {/* Display filtered users */}
          <ul className="user-list" style={{ listStyle: 'none', padding: '0' }}>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <li key={index} className="user-list-item">
                  <span>{user.email}</span>
                  <div>
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveUser(index)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li>No users found</li>
            )}
          </ul>


          <div className="link-access-container">
            <span>Anyone with link</span>
            <select
              value={linkAccess}
              onChange={(e) => handleLinkAccessChange(e.target.value)}
              className="link-access-select"
            >
              <option value="Edit">Edit</option>
              <option value="View">View</option>
            </select>
          </div>

          <div className="action-buttons">
            <button className="copy-link-button" onClick={handleCopyLink}>
              <FontAwesomeIcon icon={faCopy} /> Copy Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SharingComponent;
