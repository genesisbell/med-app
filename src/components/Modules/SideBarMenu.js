import React, {
    useContext,
    useState,
} from 'react';
import {
    Link
} from "react-router-dom"
import { useSelector } from 'react-redux';

//Custom Components
import Switch from '../CustomComponents/BasicComponents/Switch';

//Libraries
import {
    darkTheme,
    lightTheme,
} from 'themes';


//Styles
import './SideBarMenu.css';

export default function SideBarMenu(){

    // const {themeContext, theme} = useContext(ThemeContext);
    const theme = useSelector(({theme}) => theme.value);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isThemeLight, setIsThemeLight] = useState(true);

    const sideBarOpenClass = isSideBarOpen ? 'active' : '';

    function toggleSideBar(){
        setIsSideBarOpen(prevValue => !prevValue)
    }


    function changeTheme(){

        setIsThemeLight(prevState => !prevState);
        // const changedTheme = isThemeLight ? darkTheme : lightTheme;
        // const changedThemeString = isThemeLight ? 'darkTheme' : 'lightTheme';
        //themeContext.setTheme(changedTheme, changedThemeString);
    }

    const styles = {
        sideBarContainer:{
            backgroundColor: theme.header,
            height: '100%', 
        }

    }

    return(
        <div>
            <button onClick={toggleSideBar}>
                <i class="fas fa-bars"></i>
            </button>

            <div className={`sidebar-content ${sideBarOpenClass}`} style={styles.sideBarContainer}>
                <ul className="sideBarList">
                    <button className="sidebar" onClick={toggleSideBar}>
                        X
                    </button>
                    <li>
                        <Link to="/">Menú</Link>
                    </li>
                    <li>
                        <Link to="/billi">Billi</Link>
                    </li>
                </ul>
                <div style={{
                    position: 'absolute', 
                    bottom: 10, 
                    flexDirection: 'row', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                }}>
                    <label>Tema: </label>
                    <Switch 
                        onToggle={changeTheme}
                        value={isThemeLight}
                    />
                </div>
            </div>
        </div>
    )
}
