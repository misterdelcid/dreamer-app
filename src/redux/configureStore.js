import { createStore, combineReducers , applyMiddleware, compose } from 'redux'
import postsReducer from './postsReducer'
import filtersReducer from './filtersReducer'
import thunk from 'redux-thunk'
import themeReducer from './themeReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        combineReducers({
            posts: postsReducer,
            filter: filtersReducer,
            theme: themeReducer,
        }), 
        composeEnhancers(applyMiddleware(thunk)));
    return store;
};

export default configureStore;