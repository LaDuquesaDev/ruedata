import React from 'react';
import { useNavigate } from "react-router-dom";
// import '../styles/start.css'

const Start = () => {
    const navigate = useNavigate();
    navigate('/AddPet');
    return (
        <button onClick={navigate}>
            Click Me
        </button>
    )
}

export default Start;