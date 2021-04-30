import { createStore, combineReducers , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import postsReducer from './postsReducer'
import filtersReducer from './filtersReducer'
import themeReducer from './themeReducer';
import authReducer from '../redux/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        combineReducers({
            posts: postsReducer,
            filter: filtersReducer,
            theme: themeReducer,
            auth: authReducer,
        }), 
        composeEnhancers(applyMiddleware(thunk)));
    return store;
};

export default configureStore;