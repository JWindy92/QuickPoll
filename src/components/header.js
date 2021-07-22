import React, { useState, useEffect } from 'react';
import '../styles/header.css';

const Header = () => {

    const [isShrunk, setIsShrunk] = useState(false);

    const buttonHandler = () => {
        setIsShrunk(current => !current)
    }

    useEffect(() =>{}, [isShrunk])

    return (
        <div className={isShrunk ? "header shrunk" : "header"}>
            <h1>They see me pollin!</h1>
            <div className={isShrunk ? "new-poll-btn shrunk" : "new-poll-btn"} onClick={buttonHandler}>
                {isShrunk? "Cancel" : "Create a new poll!"}
            </div>
        </div>
    )
}

export default Header;