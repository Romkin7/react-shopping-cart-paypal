import { applyMiddleware, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import AppActions from './actions/actionTypes/actions';
import { composeWithDevTools } from 'redux-devtools-extension';

export type ThunkResult<R> = ThunkAction<R, AppState, undefined, AppActions>;

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
