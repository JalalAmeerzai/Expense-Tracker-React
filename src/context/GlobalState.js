import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import { getLocalTransactions } from '../utils/LocalStorage'


//setting up initial state
const initialState = {
    transactions: [
        ...getLocalTransactions()
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });

        
    }

    const addTransaction = (transactions) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}