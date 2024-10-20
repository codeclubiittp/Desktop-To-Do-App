import React from "react";
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

function SettingsProfile() {
    return (
        <div className="container">
            <Heading> 
            <h1  style={{ color: '#16423C' }}>Settings</h1>
            </Heading>
            <Body>
            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"/></svg>
                <span className="span">Account</span>
                <hr></hr>
                <div className="cont">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width: '150px', height: '150px', borderRadius: '50%'}}></img>
                    <div className="changePhoto">
                        <button>Change Photo</button>
                    </div>
                    <div className="removePhoto">
                        <button>Remove Photo</button>
                    </div>
                </div>
                <div className="all">
                    <h2>Name</h2>
                    <input></input>
                </div>
                <h2>Email</h2>
                <div className="all util">
                    <text>abc@gmail.com</text>
                    <button>Change Email</button>
                </div>
                <h2>Password</h2>
                <div className="allnew">
                    <button className="changepwd">Change Password</button>
                </div>
            </Body>
        </div>
    );
}

export default SettingsProfile;