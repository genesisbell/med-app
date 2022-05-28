import { createSlice } from '@reduxjs/toolkit';
import {
    darkTheme,
    lightTheme,
} from 'themes';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: lightTheme
  },
  reducers: {
    setLightTheme: state => {
        state.value = lightTheme
        
    },
    setDarkTheme : state => {
        state.value = darkTheme
    },
  }
});

export function dispatchThemeSelection(value, dispatch){
  switch (value) {
    case undefined:
        dispatch(setDarkTheme());                
        break;
    case 'lightTheme':
        dispatch(setLightTheme());                
        break;
    case 'darkTheme':
        dispatch(setDarkTheme());                
        break;      
    default:
        break;
    }
}

export const { 
    setLightTheme,
    setDarkTheme
} = themeSlice.actions;
export default themeSlice.reducer;
