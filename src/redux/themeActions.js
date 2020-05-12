import database from '../firebase/firebase'

//Toggle Theme
export const toggleTheme = () => ({
    type: 'TOGGLE_THEME'
});

//Start Toggling the theme
export const startToggleTheme = () => {
    return dispatch => {
        return database.ref('theme').once('value').then(snapshot => {
            const theme = snapshot.val();
            if (theme === 'light') return database.ref('theme').set('dark').then(() => {
                return dispatch(toggleTheme());
            })
            return database.ref('theme').set('light').then(() => {
                return dispatch(toggleTheme());
            })
        });
    };
};

//Set Theme
export const setTheme = (theme) => ({
    type: 'SET_THEME',
    theme
});

//Start Setting the Theme
export const startSetTheme = () => {
    return dispatch => {
        return database.ref('theme').once('value').then(snapshot => {
            const theme = snapshot.val();
            dispatch(setTheme(theme));
        });
    };
};