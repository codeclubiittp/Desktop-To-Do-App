import React from "react";
import styled from "styled-components";
import TaskList from "../components/tasklist";
import { useState,useEffect } from "react";


const tasks = [{date: "1 Jan", task: "lorem ipsum"}, {date: "2 Jan", task: "lorem ipsum"}, {date: "3 Jan", task: "lorem ipsum"}, {date: "4 Jan", task: "lorem ipsum"}, {date: "5 Jan", task: "lorem ipsum"}];


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

function InboxPage(){
    
    const [overdue, setOverdue] = useState(true);
    const showOverdue = () => setOverdue(!overdue);
   
    const [today, setToday] = useState(true);
    const showToday = () => setToday(!today);

    const [completed, setCompleted] = useState(true);
    const showCompleted = () => setCompleted(!completed);

    useEffect(() => {
        const path = document.getElementById("path");
        const icon = document.getElementById("icon");
    
        // Add the event listeners
        icon.addEventListener("mouseover", () => {
          path.setAttribute('d', 'M11 9V5H9v4H5v2h4v4h2v-4h4V9zm-1 11a10 10 0 1 1 0-20a10 10 0 0 1 0 20');
        });
    
        icon.addEventListener("mouseout", () => {
          path.setAttribute('d', 'M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z');
    });
    return () => {
        icon.removeEventListener("mouseover", () => {});
        icon.removeEventListener("mouseout", () => {});
      };
    }, []);

    return(
        <div className="container">
        <h1  style={{ color: '#16423C' }}>Inbox</h1>
        <All>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"/></svg>
            <h5>8 tasks today</h5>
        </All>
        <Element>
            <div className="tasklist overdue">
                <button className="btn" onClick={showOverdue} >
                {overdue ? <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z"/></g>
                           </svg> : 
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/></g>
                </svg> }     
                </button>
                <h1>Overdue</h1>

            </div>
            <div className="element">
                {overdue && tasks.map((task,index) => (
                    <TaskList key={index} index={index} date={task.date} task={task.task} />
                ))}
            </div>
        </Element>
            

        <Element>
            <div className="tasklist today">
                <button className="btn" onClick={showToday}>
                {today ? <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z"/></g>
                           </svg> : 
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/></g>
                </svg> }
                </button>
                <h1>Today</h1>
            </div>
            <div className="element">
                {today && tasks.map((task,index) => (
                        <TaskList key={index} index={index} date={task.date} task={task.task} />
                ))}
            </div>
        </Element>
                

        <Element>
            <div className="tasklist completed">
                <button className="btn" onClick={showCompleted}>
                {completed ? <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z"/></g>
                           </svg> : 
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/></g>
                </svg> }
                </button>
                <h1>Completed</h1>
            </div>
            <div className="element">
                {completed && tasks.map((task,index) => (
                        <TaskList key={index} index={index} date={task.date} task={task.task} />
                ))}
            </div>
            <hr style={{ width: "75%", marginLeft: "30px" }} />
        </Element>
        <Element>
                <div className="task">
                <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path id="path" fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>                   
                    <h3> Add Task</h3>
                </div>
        </Element>
        </div>
        
    );
}

export default InboxPage;