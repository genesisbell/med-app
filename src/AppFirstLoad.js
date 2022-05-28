import React, {
    useEffect,
    useMemo,
    useReducer,
    useState,
} from 'react';
import { useSelector } from 'react-redux';

//Components
import AppRouter from './AppRouter';

export default function AppFirstLoad(){

    const theme = useSelector(({theme}) => theme.value);

    console.log(theme, 'this is the theme')


    //const [theme, setTheme] = useState(Themes.lightTheme);

    /* Start Theme Management */
    
    useEffect(() => {
        document.body.style = `background-color: ${theme.background};`;
    }, [theme.background]);
    
    // const initialThemeState = {
    //     theme: Themes.lightTheme,
    //     themeString: 'lightTheme',
    // };

    // const [themeState, themeDispatch] = useReducer(ThemeReducer, initialThemeState);

    // const themeContext = useMemo(() => ({
    //     setTheme: async(theme, themeString) => {

    //         //Save theme to cache

    //         //Set Theme
    //         setTheme(theme);
    //         themeDispatch({type: 'CHANGE_THEME', theme: theme, themeString: themeString});
    //     }
    // }), []);






    /* End Theme Management */


    return(
        <AppRouter/>
    )
}
