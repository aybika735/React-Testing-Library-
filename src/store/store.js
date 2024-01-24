import counterReducer from "./reducers/counterReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
counter: counterReducer,
})
export const createReduxStore =(initialState={})=>{
return configureStore({
    reducer: rootReducer,
    preloadedState: initialState
})
}