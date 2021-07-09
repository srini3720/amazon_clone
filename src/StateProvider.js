import react, { createContext, useContext, useReducer }from "react"
//create the datalayer
export const StateContext = createContext();
//wrap our app
export const StateProvider= ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//pull informatin from data layer
export const useStateValue =() => useContext(StateContext)
