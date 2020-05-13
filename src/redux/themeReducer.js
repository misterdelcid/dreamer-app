const defaultTheme = 'light'

const themeReducer = (state = defaultTheme, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            if (state === 'light') return 'dark' 
            if (state === 'dark') return 'light'
            break
        case 'SET_THEME':
            return action.theme
        default:
            return state;
    }
}

export default themeReducer