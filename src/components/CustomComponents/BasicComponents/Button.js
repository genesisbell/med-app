import React,{
    useContext,
    useState,
} from 'react';

//Context
import { ThemeContext } from '../../Context';

//Styles
import './Button.css'

export default function Button({title}){

    const { theme } = useContext(ThemeContext);

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