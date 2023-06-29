import {createContext, useContext, useEffect, useMemo, useReducer} from "react";
import { THEME, USERS_URL} from "./constants";
import { useFetch } from "./useFetch";

const initialState = {theme: THEME.LIGHT, data: []}

const GLOBAL_ACTIONS = {
  SWITCH_THEME: "SWITCH_THEME",
  UPDATE_USERS: "UPDATE_USERS"
}

const globalContextReducer = (state, action) => {
    const {SWITCH_THEME, UPDATE_USERS} = GLOBAL_ACTIONS

    switch (action.type) {
        case SWITCH_THEME:
            return {...state, theme: action.payload}
        case UPDATE_USERS:
            return {...state, data: action.payload}
        default:
            throw new Error('Invalid action type');
    }
}

const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [globalState, dispatchGlobalState] = useReducer(globalContextReducer, initialState);
    const contextValue = useMemo(() => ({
        globalState,
        dispatchGlobalState
    }), [globalState, dispatchGlobalState])
    const users = useFetch(USERS_URL);

    useEffect(() => {
        console.log("calling global state dispatcher")
        console.log("users", users)

        if (users) {
            dispatchGlobalState({type: "UPDATE_USERS", payload: users.data})
        }
    }, [users])

    useEffect(() => {
        localStorage.setItem("theme", globalState.theme)
    }, [globalState.theme]);

    return (
        <ContextGlobal.Provider value={contextValue}>
            {children}
        </ContextGlobal.Provider>
    );
};

export const useGlobalContext = () => useContext(ContextGlobal)