import { combineReducers } from 'redux';
import UserReducer from './user';
import CredsReducer from './credential';

const appReducer = combineReducers({
    user: UserReducer,
    creds: CredsReducer
});

//@ts-ignore
export const rootReducers = (state, action) => {
    return appReducer(state, action);
}