import { createContext, UseReducer } from 'react'


export const authContext = createContext()


export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        default:
            return state

    }
}

export const authContextProvider = ({ children }) => {
    const [state, dispatch] = UseReducer(authReducer, {
        user: null
    })
    //tracking the login and logout state
    console.log('authContext state :', state);

    return (
        <authContext.Provider value={{ ...state, dispatch }}>
            {children}
        </authContext.Provider>
    )
}