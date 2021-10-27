import React, {
    useEffect,
    useMemo,
    useReducer,
    useState,
} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//Pages
import BilliPage from './components/PagesComponents/BilliPage';
import MenuPage from './components/PagesComponents/MenuPage';

//Modules Components
import Header from './components/Modules/Header';

//Library Componets
import Themes from './components/LibraryComponents/Colors';

//Context
import ThemeReducer from './reducers/ThemeReducer';
import { ThemeContext } from './components/Context';

export default function App(){

    const [theme, setTheme] = useState(Themes.lightTheme);

    /* Start Theme Management */
    
    useEffect(() => {
        document.body.style = `background-color: ${theme.background};`;
    }, [theme.background]);
    
    const initialThemeState = {
        theme: Themes.lightTheme,
        themeString: 'lightTheme',
    };

    const [themeState, themeDispatch] = useReducer(ThemeReducer, initialThemeState);

    const themeContext = useMemo(() => ({
        setTheme: async(theme, themeString) => {

            //Save theme to cache

            //Set Theme
            setTheme(theme);
            themeDispatch({type: 'CHANGE_THEME', theme: theme, themeString: themeString});
        }
    }), []);

    /* End Theme Management */


    return(
        <ThemeContext.Provider value={{themeContext, theme}}>
            <Router>
                <Switch>
                    <Route path="/billi">
                        <BilliPage />
                    </Route>
                    <Route path="/">
                        <BilliPage />
                    </Route>
                </Switch>
            </Router>
        </ThemeContext.Provider>
    )
}
