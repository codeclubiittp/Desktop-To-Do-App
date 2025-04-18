import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Element = styled.div`
    margin-bottom: -25px;

    hr {
        width: 75%;
        margin-left: 0;
    }

    .description {
        display: flex;
        align-items: center; /* Align radio button and task text vertically */
        gap: 10px; /* Space between radio button and text */

        #btn {
            font-size: 17px;
            color: #16423C;
            font-weight: 600; /* Keep bold styling for the task name */
        }

        input[type="radio"] {
            display: none;
        }

        .inradio {
            height: 13px;
            width: 13px;
            border-radius: 50%;
            display: inline-block;
            border: 2px solid #16423C;
            background-color: #D9D9D9;
            position: relative;
            margin-right: 10px;
            cursor: pointer;
        }

        input[type="radio"]:checked + .inradio {
            background-color: #16423C;
            border-color: #D9D9D9;
        }

        .text {
            display: flex;
            flex-direction: column; /* Stack task name and description */
            gap: 4px; /* Keep task name and description closer together */
        }

        h3 {
            font-size: 14px; /* Smaller font size for description */
            font-weight: 400; /* Normal font weight (not bold) */
            color: #16423C;
        }
    }

    .date {
        margin-left: 20px;
        margin-top: -20px;
        display: flex;
        align-items: center;
        gap: 5px;

        svg {
            size: 10px;
        }

        h6 {
            font-size: 12px;
            color: #16423C;
            font-weight: 400;
        }
    }
`;




function TaskList(props) {
    return (
        <div className="container">
            <Element>
                <hr />
                <div className="description">
                    <label htmlFor={`check-${props.index}`}>
                        <input type="radio" id={`check-${props.index}`} />
                        <span className="inradio"></span>
                    </label>
                    <div className="text">
                        <h2 id="btn">{props.task}</h2>
                        <h3 id="btn">{props.description}</h3>
                    </div>
                </div>
                <div className="date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 1024 1024">
                        <path fill="currentColor" d="M960 95.888L703.776 96V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985M960 959.873H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32m0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32m-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32m0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32" />
                    </svg>
                    <h6>{props.date}</h6>
                </div>
            </Element>
        </div>
    );
}


export default TaskList;