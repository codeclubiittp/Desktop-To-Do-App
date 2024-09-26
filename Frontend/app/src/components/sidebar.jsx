import React,{useState} from "react";
import styled from 'styled-components';

class Side extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false, // state to manage dropdown visibility
        };
    }

    toggleDropdown = () => {
        this.setState((prevState) => ({ dropdownOpen: !prevState.dropdownOpen }));
    };
    render() {

        
        return (
            <div >
                <div className="item">
                    <i className="fa fa-home"></i>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Icon Image"/>         
                    <span className="user">Jaimin</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M427.68 351.43C402 320 383.87 304 383.87 217.35C383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53c-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43C73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57M320 384v16a64 64 0 0 1-128 0v-16"/></svg>          
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="currentColor" d="m16.41 18.16l-5.66-5.66l5.66-5.66l.7.71l-4.95 4.95l4.95 4.95zm-4 0L6.75 12.5l5.66-5.66l.7.71l-4.95 4.95l4.95 4.95z"/></svg>      
                </div>
                <div className="item">
                    <a href="/dashboard">
                        <i className="fa fa-home"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M11 9V5H9v4H5v2h4v4h2v-4h4V9zm-1 11a10 10 0 1 1 0-20a10 10 0 0 1 0 20"/></svg>
                        <span>Add Task</span>
                    </a>
                </div>
                <div className="item">
                    <a href="/dashboard">
                        <i className="fa fa-home"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
                        <span>Search</span>
                    </a>
                </div>
                <div className="item">
                    <a href="/dashboard">
                        <i className="fa fa-home"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/><path d="M21.5 13.5h-4.926c-.842 0-1.503.704-1.875 1.447c-.403.808-1.21 1.553-2.699 1.553s-2.296-.745-2.7-1.553c-.37-.743-1.032-1.447-1.874-1.447H2.5"/></g></svg>
                        <span>Inbox</span>
                    </a>
                </div>
                <div className="item">
                    <a href="/dashboard">
                        <i className="fa fa-home"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985m0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32m0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32m-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32m0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32"/></svg>
                        <span>Upcoming</span>
                    </a>
                </div>
                <div className="item">
                    <a href="/dashboard">
                        <i className="fa fa-home"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6.445 12.688V7.354h-.633A13 13 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406c1.258 0 2-1.066 2-2.871c0-1.934-.781-2.668-1.953-2.668c-.926 0-1.797.672-1.797 1.809c0 1.16.824 1.77 1.676 1.77c.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164c-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18c-.601 0-1.144-.383-1.144-1.2c0-.823.582-1.21 1.168-1.21c.633 0 1.16.398 1.16 1.23"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/></g></svg>                  
                        <span>Today</span>
                    </a>
                </div>
                <div className="item">
                    <a href="/dashboard">
                        <i className="fa fa-home"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/></svg>
                        <span>Labels</span>
                    </a>
                </div>

                <div className="item">
                    <a href="/dashboard">
                        <i className="fa fa-home"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/></svg>
                        <span>Labels</span>
                    </a>
                </div>

                <div className="drop">
                    <div className="dropdown-toggle" style={{ cursor: 'pointer' }}>
                        <i className="fa fa-caret-down"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 7v8h-2v-1H9v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"/></svg>
                        <span>Team Name</span>
                        <button className="btn" onClick={this.toggleDropdown}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/></g>
                            </svg>
                        </button>
                    </div>

                    {/* Dropdown content - visible only when dropdownOpen is true */}
                    {this.state.dropdownOpen && (
                        <div className="dropdown-content" style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                            <div className="dropdown-item">
                                <a href="/option1">Project 1</a>
                            </div>
                            <div className="dropdown-item">
                                <a href="/option2">Project 2</a>
                            </div>
                            <div className="dropdown-item">
                                <a href="/option3">Project 3</a>
                            </div>
                        </div>
                    )}
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
                            <span>Settings</span>
                        </a>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

const StyledSideElement = styled.div`
max-width: 250px;
height: 100vh;
background-color: #DCDEDC;
.item{
    margin-top: 9px;
    display: flex;
    align-items: center;
    
};
svg{
    height: 21px;
    width: 21px;
    margin-right: 16px;
    color: #6A9C89;
    fill : #6A9C89;
    weight: 150%;
};

.b{
    svg{
        height:30px;
        width:30px;
    }
    font-size: 20px;
    font-weight: 500;
}

.drop{
    display:inline-block;
}

.container{
    position: absolute;
    bottom: 25px;
}

img{
    margin-right: 12px;
    border-radius: 50%;
    height: 35px;
    width: 35px;
}

.user{
    margin-right: 10px;
    font-size: 20px;
    font-weight: 500;
    color:#16423C;
}

.btn{
    background-color: #DCDEDC;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 13px;
    paddingTop: 15px;
    margin-left: 10px;
    cursor: pointer;
}

`;


function Sidebar(props){

    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <div className="sidebar">

                {sidebar ?  <button className="hamburger">
                    <i className="fa fa-bars" onClick={showSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m6.59 6.84l5.66 5.66l-5.66 5.66l-.7-.71l4.95-4.95l-4.95-4.95zm4 0l5.66 5.66l-5.66 5.66l-.7-.71l4.95-4.95l-4.95-4.95z"/></svg>
                    </i>
                </button>  : '' }
                
                {sidebar ? '' : <StyledSideElement><Side /></StyledSideElement> }
                
                
            </div>
        </div>
    );

}

export default Sidebar;