import React, {
    useContext,
    useState,
} from 'react';

//Custom Components
import Switch from '../CustomComponents/BasicComponents/Switch';
import Svg from '../CustomComponents/BasicComponents/Svg';

//Libraries
import Themes from '../LibraryComponents/Colors';
import Icons from '../LibraryComponents/Icons';

//Context
import { ThemeContext } from '../Context';

export default function Header(){

    const {themeContext, theme} = useContext(ThemeContext);

    const [isThemeLight, setIsThemeLight] = useState(true);

    function changeTheme(){

        setIsThemeLight(prevState => !prevState);
        const changedTheme = isThemeLight ? Themes.darkTheme : Themes.lightTheme;
        const changedThemeString = isThemeLight ? 'darkTheme' : 'lightTheme';
        themeContext.setTheme(changedTheme, changedThemeString);
    }

    const styles = {
        headerContainer: {
            alignItems: 'center',
            backgroundColor: theme.header,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '1%',
            textAlign: 'center',
        },
        header:{
            color: theme.headerText,
            
        },
    }

    return(
        <div style={styles.headerContainer}>
            <Svg xml={Icons.logo(50,50)}/>
            <h1 style={styles.header}>Calculadora Hiperbilirrubinemia</h1>
            <Switch 
                onToggle={changeTheme}
                value={isThemeLight}
            />
        </div>
    );
}


