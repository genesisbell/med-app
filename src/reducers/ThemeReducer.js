export default function ThemeReducer(prevState, action){
    switch (action.type) {
        case 'CHANGE_THEME':
            return{
                ...prevState,
                theme: action.theme,
                themeString: action.themeString,
            }
    
        default:
            break;
    }
}