import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import TaskList from './components/tasklist';
import TodayPage from './pages/Today';
import InboxPage from './pages/Inbox';
import styled from 'styled-components';

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
    // const [message, setMessage] = useState('');

    // useEffect(() => {
    //     window.api.receive('response-channel', (message) => {
    //         setMessage(message);
    //     });
    // }, []);

    // const sendMessage = () => {
    //     window.api.send('message-channel', 'Hello from React!');
    // };

    return (

        <Layout>
          <Sidestyle>
            <Sidebar />
          </Sidestyle>
          <MainContent>
            <InboxPage />
          </MainContent>
        </Layout>
    );
}

export default App;
