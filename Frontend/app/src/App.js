import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Search from "./components/Search";
import CalendarPage from "./components/Upcoming/CalenderPage";
import SendInvite from "./components/Invite/SendInvite";
import TaskList from "./components/tasklist";
import TodayPage from "./pages/Today";
import InboxPage from "./pages/Inbox";
import SettingsGeneral from "./pages/SettingsGeneral";
import SettingsProfile from "./pages/SettingsProfile";
import LoginForm from "./components/Auth/Login";
import SignupForm from "./components/Auth/Signup";
import VerticalNav from "./components/VerticalNav";

// Layout styling
const Layout = styled.div`
  display: flex;
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
    <Router>
      <Layout>
        <Sidestyle>
          <Sidebar />
        </Sidestyle>
        <MainContent>
          <Routes>
            <Route path="/" element={<InboxPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/send-invite" element={<SendInvite />} />
            <Route path="/task-list" element={<TaskList />} />
            <Route path="/today" element={<TodayPage />} />
            <Route path="/inbox" element={<InboxPage />} />
            <Route path="/settings/general" element={<SettingsGeneral />} />
            <Route path="/settings/profile" element={<SettingsProfile />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </MainContent>
      </Layout>
    </Router>
  );
}

export default App;
