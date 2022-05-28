import React from 'react';
import { useSelector } from 'react-redux';

//Modules
import SideBarMenu from './SideBarMenu';

//Custom Components
import Svg from '../CustomComponents/BasicComponents/Svg';

//Libraries
import Icons from '../LibraryComponents/Icons';

export default function Header({title}){

    const theme = useSelector(({theme}) => theme.value);

    const styles = {
        headerContainer: {
            alignItems: 'center',
            backgroundColor: theme.header,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 30,
            paddingLeft: 0,
            textAlign: 'center',
            //width: '100%',
        },
        header:{
            color: theme.headerText,
            alignSelf: 'center'
            
        },
    }

    return(
        <div style={styles.headerContainer}>
            
                <SideBarMenu/>
                <Svg xml={Icons.logo(50,50)}/>
           
            <h1 style={styles.header}>{title}</h1>
        </div>
    );
}


