import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import './Button.css'

export default function Button({title}){

    const theme = useSelector(({theme}) => theme.value);

    return(
        <div className="buttonContainer">
            <input 
                className="button" 
                type="submit" 
                value={title}
                style={{
                    backgroundColor: theme.button, 
                    color: theme.buttonText,
                }} 
            />
        </div>
    )
}