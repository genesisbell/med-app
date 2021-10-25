import React, {
    useContext,
} from 'react';

//Modules
import SideBarMenu from './SideBarMenu';

//Custom Components
import Svg from '../CustomComponents/BasicComponents/Svg';

//Libraries
import Icons from '../LibraryComponents/Icons';

//Context
import { ThemeContext } from '../Context';

export default function Header({title}){

    const {theme} = useContext(ThemeContext);

    const styles = {
        headerContainer: {
            backgroundColor: theme.header,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '1%',
            paddingLeft: 0,
            textAlign: 'center',
        },
        header:{
            color: theme.headerText,
            alignSelf: 'center'
            
        },
    }

    return(
        <div style={styles.headerContainer}>
            {/**
                <SideBarMenu/>
                <Svg xml={Icons.logo(50,50)}/>
            */}
            <h1 style={styles.header}>{title}</h1>
        </div>
    );
}


