import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { deleteLocalTransaction } from '../utils/LocalStorage'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            { transaction.text} <span>{sign} Rs. {Math.abs(transaction.amount)}</span><button onClick={() => { deleteTransaction(transaction.id); deleteLocalTransaction(transaction.id) } } className="delete-btn">x</button>
        </li>
    )
}
