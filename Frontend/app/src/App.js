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
import { SignedIn, SignedOut, SignInButton, SignOutButton,  UserButton } from '@clerk/clerk-react'

const Layout = styled.div`
  display: flex; /* Makes it a flex container */
`;

const Sidestyle = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1; 
  background-color: #ffffff;
  padding: 20px;
`;


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
      <header>
          <SignedOut>
  <SignInButton />
</SignedOut>
<SignedIn>
  {/* <UserButton /> */}
  <Layout>
  <SignOutButton />
          <Sidestyle>
            <Sidebar />
          </Sidestyle>
          <MainContent>
            {/* <InboxPage /> */}
            {/* <VerticalNav /> */}
            {/* <SettingsGeneral /> */}
            {/* <SettingsProfile /> */}
            <SettingsNotification />
            {/* <CalendarPage /> */}
            {/* <SettingsProfile /> */}
            {/* <SettingsExtensions /> */}
            {/* <SettingsThemes /> */}
          </MainContent>
        </Layout>
  
</SignedIn>

</header>
        // <Layout>
        //   <Sidestyle>
        //     <Sidebar />
        //   </Sidestyle>
        //   <MainContent>
        //     {/* <InboxPage /> */}
        //     {/* <VerticalNav /> */}
        //     {/* <SettingsGeneral /> */}
        //     {/* <SettingsProfile /> */}
        //     <SettingsNotification />
        //     {/* <CalendarPage /> */}
        //     {/* <SettingsProfile /> */}
        //     {/* <SettingsExtensions /> */}
        //     {/* <SettingsThemes /> */}
        //   </MainContent>
        // </Layout>
    );
}

export default App;
