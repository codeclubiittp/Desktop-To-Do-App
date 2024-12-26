import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #DCDEDC;
  width: ${(props) => (props.isOpen ? "250px" : "60px")};
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isOpen ? "flex-start" : "center")};
  padding-top: 20px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.isOpen ? "flex-start" : "center")};
    width: 100%;
    padding: 10px 20px;
    color: #16423C;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    .dropdown {
      margin-top: 10px;
      display: ${(props) => (props.dropdownOpen ? "block" : "none")};
      width: 100%;
      padding-left: ${(props) => (props.isOpen ? "20px" : "0")};

      a {
        text-decoration: none; /* Removes underline */
        color: inherit;        /* Inherits text color from parent */
        margin: 5px 0;
        display: block;
        font-size: 14px;

        &:hover {
            color: #6A9C89; /* Optional: Adds hover effect */
        }
    }

    }

    img{
        margin-right: 12px;
        border-radius: 50%;
        height: 35px;
        width: 35px;
    }

    svg {
      width: 24px;
      height: 24px;
      margin-right: ${(props) => (props.isOpen ? "10px" : "0")};
      transition: margin-right 0.3s ease-in-out;
    }

    span {
      display: ${(props) => (props.isOpen ? "inline" : "none")};
      white-space: nowrap;
    }

    &:hover {
      background-color: #d4d4d4;
      border-radius: 5px;
    }
  }

  .toggle-btn {
    position: absolute;
    bottom: 20px;
    left: ${(props) => (props.isOpen ? "200px" : "10px")};
    background-color: #6A9C89;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: left 0.3s ease-in-out;
  }
    .container{
    position: absolute;
    bottom: 25px;
    }
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <StyledSidebar isOpen={isOpen} dropdownOpen={dropdownOpen}>
      <div className="item">
            <i className="fa fa-home"></i>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Icon Image"/>         
            <span className="user">Jaimin</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M427.68 351.43C402 320 383.87 304 383.87 217.35C383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53c-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43C73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57M320 384v16a64 64 0 0 1-128 0v-16"/></svg>          
            <i className="fa fa-bars toggle-btn"  onClick={toggleSidebar} style={{"borderWidth":"0","marginLeft":"10px","marginTop":"10px","cursor":"pointer"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16"><path fill="#16423C" fill-rule="evenodd" d="M6 3.5h6A1.5 1.5 0 0 1 13.5 5v6a1.5 1.5 0 0 1-1.5 1.5H6zm-1.5 0H4A1.5 1.5 0 0 0 2.5 5v6A1.5 1.5 0 0 0 4 12.5h.5zM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z" clip-rule="evenodd"/></svg>          
            </i>  
        </div>
        <div className="item">
            <Link to="/add">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M11 9V5H9v4H5v2h4v4h2v-4h4V9zm-1 11a10 10 0 1 1 0-20a10 10 0 0 1 0 20"/></svg>
                Add Task
            </Link>
        </div>
        <div className="item">
            <Link to="/search">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
                Search
            </Link>
        </div>
        <div className="item">
            <Link to="/inbox">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/><path d="M21.5 13.5h-4.926c-.842 0-1.503.704-1.875 1.447c-.403.808-1.21 1.553-2.699 1.553s-2.296-.745-2.7-1.553c-.37-.743-1.032-1.447-1.874-1.447H2.5"/></g></svg>
                Inbox
            </Link>
        </div>
        <div className="item">
            <Link to="/calendar">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985m0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32m0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32m-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32m0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32"/></svg>
                Upcoming
            </Link> 
        </div>
        <div className="item">
            <Link to="/calendar">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6.445 12.688V7.354h-.633A13 13 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406c1.258 0 2-1.066 2-2.871c0-1.934-.781-2.668-1.953-2.668c-.926 0-1.797.672-1.797 1.809c0 1.16.824 1.77 1.676 1.77c.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164c-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18c-.601 0-1.144-.383-1.144-1.2c0-.823.582-1.21 1.168-1.21c.633 0 1.16.398 1.16 1.23"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/></g></svg>                  
                Today
            </Link> 
            
        </div>
        <div className="item" onClick={toggleDropdown}>
        <i className="fa fa-tasks"></i>
        <span>Team Name</span>
        <div className="dropdown">
          <Link to="/tasks/add">Project 1</Link>
          <Link to="/tasks/view">Project 2</Link>
          <Link to="/tasks/settings">Project 3</Link>
        </div>
      </div>
        <div className="container">
                <div className="item b">
                    <a href="/dashboard">
                        <i className="fa fa-home"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M7 10.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M10.5 5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M21 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8M2 21a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v.226a3 3 0 0 1-.02.279c-.02.173-.057.408-.13.686a5.6 5.6 0 0 1-.999 2.017C16.681 25.71 14.48 27 10.5 27s-6.18-1.29-7.351-2.792a5.6 5.6 0 0 1-1-2.017a5 5 0 0 1-.146-.898l-.002-.067v-.023L2 21.195zm2 .178v.012q0 .026.009.094c.01.09.031.23.076.404c.09.348.273.818.641 1.291C5.431 23.883 6.98 25 10.5 25s5.07-1.117 5.774-2.02a3.6 3.6 0 0 0 .64-1.292A3 3 0 0 0 17 21.19l.001-.012V21a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zm15.477 3.314c.93.316 2.087.508 3.523.508c3.201 0 5.02-.953 6.013-2.125c.483-.57.73-1.148.855-1.592a3.7 3.7 0 0 0 .129-.729l.001-.036l.001-.022v-.038A2.457 2.457 0 0 0 27.542 18h-8.189c.5.559.863 1.243 1.035 2h7.154c.25 0 .452.199.458.446l-.004.044a2 2 0 0 1-.052.25c-.062.22-.19.528-.457.843C26.98 22.182 25.799 23 23 23c-1.165 0-2.049-.142-2.721-.35a7 7 0 0 1-.802 1.842"/></svg>
                        <span>Invite Members</span>
                    </a>
                </div>
            

            <div className="item b">
                <a href="/dashboard">
                    <i className="fa fa-home"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M13.765 2.152C13.398 2 12.932 2 12 2s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.62 1.62 0 0 1-.79 1.353a1.62 1.62 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7s-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.62 1.62 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.62 1.62 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453s.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.62 1.62 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.62 1.62 0 0 1-1.566-.008a1.62 1.62 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"/></g></svg>
                    <Link to="/settings">Settings</Link>
                </a>
            </div>
        </div>
            
      
      
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"}
      </button>
    </StyledSidebar>
  );
}

export default Sidebar;
