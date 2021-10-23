const sharedColors = {
    button: '#E74424',
    buttonText: '#F7F1E6'
}

const Themes = {
    lightTheme : {
        background: '#ffffff',
        background2: '#E5E5E5',
        header: '#2D4059',
        headerText: '#ffffff',

        inputContainer: '#ECECEC',
        placeholder: '#eaeaea',
        text: '#000000',
        text2: '#7D7F81',
        textLight: '#7D7F81',

        ...sharedColors,
    },

    darkTheme : {
        background: '#222831',
        background2: '#414141',
        header: '#30475E',
        headerText: '#DDDDDD',

        inputContainer: '#414141',
        placeholder: '#4D4D4D',
        text: '#DDDDDD',
        text2: '#ABAEB2', 
        textLight: '#7D7F81',

        ...sharedColors,
    },
}

export default Themes;


// light colors:
// #2D4059
// #EA5455
// #DECDC3
// #E5E5E5

// dark colors:
// #222831
// #30475E
// #DDDDDD
// #F05454