import React from 'react';
import './Switch.css';

export default function Switch({onToggle, value}){

    return(
        <label className="switch" >
            <input type="checkbox" onClick={onToggle} id="switch"/>
            <span className="slider round"></span>
        </label>
    );
}