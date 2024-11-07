import React, { useState } from "react";
import styled from "styled-components";

const Element = styled.div`
    .tasklist{
        display: flex;
        margin-bottom: -15px;
    }

    button{
        background-color: white;
        border: none;
        cursor: pointer;
        color: #16423C;
        margin-top: 10px;
    }

    h1{
        font-size: 17px;
        color: #16423C;
        font-weight: 650;
    }

    .element{
        margin-left: 55px;
    }

    .task{
        margin-left: 55px;
        h3{
            color: #16423C;
            margin-left: 29px;
            margin-top:-25px;
            font-size: 19px;
        }
        svg{
            weight: 10px;
            color: #16423C;
            height: 18px;
            width: 18px;
        }
    }

   
`;


const All = styled.div`
    margin-top: -20px;
    h5{
        color: #16423C;
        margin-top: -1px;
        margin-left: 7px;
    }
    svg{
        color: #16423C;
    }
    display: flex;
`;

const Heading = styled.div`
    margin-top: 15px;
    margin-left: 150px;
    h5{
        color: #16423C;
        margin-top: -1px;
        margin-left: 7px;
    }
    svg{
        color: #16423C;
    }
    font-size: 20px;
    display: flex;
`;

const Body = styled.div`
    margin-top: 30px;
    margin-left: 150px;
    align-items: center; /* This will vertically align span and svg */
    span{
        color: #16423C;
        margin-left: 8px; /* Adjust as needed */
        font-size: 30px;
    }
    svg{
        color: #16423C;
        margin-right: 10px; /* Add some margin to space it from span */
    }
    hr{
        margin-left: -4px;
        width: 60%;
        margin-top: 10px;
        color: #16423C;
    }
    image{
        width: 100px;
        height: 100px;
        border-radius: 50%;

    }
    .allnew {
        margin-top: -30px;
        margin-left: 115px;
        button {
            margin-top: 30px;
            margin-left: -120px;
            padding: 10px;
            border: 2px solid #16423C;
            border-radius: 5px;
            font-size: 16px;
            background-color: #ffffff;
            color: #16423C;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        button:hover {
            background-color: #16423C;
            color: white;
        }
    }
    .all {
        color: #16423C;
        select {
            margin-top: -2px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 30%;
            font-size: 16px;
            background-color: #ffffff;
        }
        input {
            margin-top: -2px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 28.5%;
            font-size: 16px;
            background-color: #ffffff;
        }
        button {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 10%;
            font-size: 16px;
        }
    }
    .util {
        display: flex;
        margin-top: 20px;
        text {
            font-size: 16px;
        }
        button {
            margin-top: 30px;
            margin-left: -120px;
            padding: 10px;
            border: 2px solid #16423C;
            border-radius: 5px;
            font-size: 16px;
            background-color: #ffffff;
            color: #16423C;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        button:hover {
            background-color: #16423C;
            color: white;
        }
    }
    .cont{
        display: flex;
        margin-top: 20px;
        button {
            padding: 10px 50px;
            border: 2px solid #16423C;
            border-radius: 5px;
            font-size: 16px;
            background-color: #ffffff;
            color: #16423C;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        button:hover {
            background-color: #16423C;
            color: white;
        }

        .changePhoto {
            margin-top: 60px; /* Adjust the margin for Change Photo button */
            margin-left: 50px; /* Adjust the margin for Change Photo button */
            button {
                margin: 0 15px 0 0; /* Adjust button margin */
            }
        }

        .removePhoto {
            margin-top: 60px;
            margin-left: 50px; /* Adjust the margin for Remove Photo button */
            button {
                margin: 0; /* Adjust button margin */
            }
        }
    }
`;

const NotificationContainer = styled.div`
    display: flex;
    justify-content: space-between;

    .tasklist {
        display: flex;
        justify-content: space-between;  // This ensures space between title and button
        width: 100%;
        margin-bottom: -15px;

        .task {
            // display: flex;
            // align-items: center; // Vertically align the task title with the button

            .notititle {
                font-size: 20px;
                color: #16423C;
            }

            .datecont {
                display: flex;
                .date {
                    font-size: 14px;
                    color: #7D7D7D;
                    margin-top: -12px;
                    margin-left: 0px;
                }

                svg {
                    height: 15px;
                    width: 15px;
                    margin-top: -12px;
                }
            }
        }

        .clearButton {
            display: flex;
            justify-content: flex-end;  // Aligns the button to the right
            align-items: center;  // Vertically aligns the button with the title
            button {
                margin-right: 570px;
                margin-top: 20px;
                padding: 2px 10px;
                border: 1px solid #16423C;
                border-radius: 7px;
                width: auto;  // Set width to auto, so it doesn't take 10% unnecessarily
                font-size: 14px;
                background-color: #ffffff;
                color: #16423C;
                cursor: pointer;

                &:hover {
                    background-color: #16423C;
                    color: white;
                }
            }
        }
    }
`;


function SettingsNotification() {

    const [notifications, setNotifications] = useState([
        { id: 1, title: 'Email Notifications', description: 'Receive email notifications for new tasks, comments, and more.', date: '1 January' },
        { id: 2, title: 'Push Notifications', description: 'Receive push notifications for new tasks, comments, and more.', date: '1 January' },
        { id: 3, title: 'SMS Notifications', description: 'Receive SMS notifications for new tasks, comments, and more.', date: '1 January' },
        { id: 4, title: 'Notification Sound', description: 'Receive sound notifications for new tasks, comments, and more.', date: '1 January' },
        { id: 5, title: 'Notification Vibration', description: 'Receive vibration notifications for new tasks, comments, and more.', date: '1 January' },
    ]);

    const handleClear = (id) => {
        const updatedNotifications = notifications.filter(notification => notification.id !== id);
        setNotifications(updatedNotifications);
        console.log('Cleared notification with id: ', id);
    }

    return (
        <div className="container">
            <Heading> 
            <h1  style={{ color: '#16423C' }}>Settings</h1>
            </Heading>
            <Body>
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
                <span className="span">Notifications</span>
                <hr></hr>
                {notifications.map((notification) => (
                    <NotificationContainer key={notification.id}>
                        <div className="tasklist">
                            <div className="task">
                                <p className="notititle">{notification.title}</p>
                                <div className="datecont">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24"><path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"/></svg>
                                    <p className="date">{notification.date}</p>
                                </div>
                            </div>
                            <div className="clearButton">
                                <button onClick={() => handleClear(notification.id)}>Clear</button>
                            </div>
                        </div>
                    </NotificationContainer>  
                ))}
            </Body>
        </div>
    );
}

export default SettingsNotification