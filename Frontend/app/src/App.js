import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import CalendarPage from './components/Upcoming/CalenderPage';
import SendInvite from './components/Invite/SendInvite';

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
        <div>
            {/* <button onClick={sendMessage}>Send Message</button>
            <p>Message from Electron: {message}</p> */}
            <CalendarPage/>
            {/* <SendInvite /> */}
        </div>
    );
}

export default App;
