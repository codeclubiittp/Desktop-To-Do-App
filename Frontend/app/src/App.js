import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import Sidebar from './components/sidebar';
import CalendarPage from './components/Upcoming/CalenderPage';
import SendInvite from './components/Invite/SendInvite';
import TaskList from './components/tasklist';
import TodayPage from './pages/Today';
import InboxPage from './pages/Inbox';
import SettingsGeneral from './pages/SettingsGeneral';
import styled from 'styled-components';
import VerticalNav from './components/VerticalNav';
import SettingsProfile from './pages/SettingsProfile';
import SettingsNotification from './pages/SettingsNotification';
import SettingsExtensions from './pages/Extensions';
import SettingsThemes from './pages/Themes';

const Layout = styled.div`
  display: flex; /* Makes it a flex container */
`;

const Sidestyle = styled.div`
  width: 250px;
  background-color: #FFFFFF;
  height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1; 
  background-color: #ffffff;
  padding: 20px;
`;


const days = ['Monday 12', 'Tuesday 13', 'Wednesday 14', 'Thursday 15', 'Friday 16', 'Saturday 17', 'Sunday 18'];
const times = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];

const events = [
  {
    day: 1,
    time: 0,
    title: 'Shooting Stars',
    color: '#5cb85c',
    users: [{ name: 'John', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' }]
  },
  {
    day: 2,
    time: 1,
    title: 'The Amazing Hubble',
    color: '#5bc0de',
    users: [
      { name: 'Alice', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { name: 'Bob', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' }
    ]
  },
  {
    day: 3,
    time: 2,
    title: 'Astronomy Binoculars',
    color: '#f0ad4e',
    users: [{ name: 'Charlie', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' }]
  }
];


function App() {
    return (
//         <Router>
//             <div>
//                 <Sidebar /> {/* If you want a sidebar in all routes */}
//                 <nav>
//                     <Link to="/search">Go to Search</Link>
//                 </nav>
//                 <Routes>
//                     <Route path="/search" element={<Search />} />
//                 </Routes>
//             </div>
//         </Router>
        <Layout>
          <Sidestyle>
            <Sidebar />
          </Sidestyle>
          <MainContent>
            {/* <InboxPage /> */}
            {/* <VerticalNav /> */}
            {/* <SettingsGeneral /> */}
            <Calendar />            {/* <SettingsProfile /> */}
            {/* <SettingsExtensions /> */}
            {/* <SettingsThemes /> */}
            {/* <SettingsProfile /> */}
            <SettingsNotification />
            {/* <CalendarPage /> */}
            {/* <SettingsProfile /> */}
            {/* <SettingsExtensions /> */}
            {/* <SettingsThemes /> */}
          </MainContent>
        </Layout>
    );
}

export default App;
