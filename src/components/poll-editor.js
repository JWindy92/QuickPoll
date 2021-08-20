import React, { useState, useEffect } from 'react';
import '../styles/poll-editor.css';

const test_func = () => {

    console.log('Test');
}

const PollEditor = (props) => {

    return(
        <div className={props.show ? "poll-editor show" : "poll-editor"}>
            <h1>Please enter a title</h1>
            <input className="title-input" type="text"></input>
            <button onClick={test_func}>Create</button>
        </div>
    )

}

export default PollEditor;
