import React from 'react'

export const IncomeExpenses = () => {

    const income = 100
    const expense = 200
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
      </div>
    )
}
