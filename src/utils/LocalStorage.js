let localTransactions = []

export const getLocalTransactions = () => {
    if (localStorage.getItem("transactions") === null) {
        localStorage.setItem('transactions', JSON.stringify(localTransactions));
    }
    else {
        localTransactions = [...JSON.parse(localStorage.getItem('transactions'))]
    }
    return localTransactions
}

export const addLocalTransaction = (newTransaction) => {
    localTransactions = [newTransaction, ...JSON.parse(localStorage.getItem('transactions'))]
    localStorage.setItem('transactions', JSON.stringify(localTransactions));
}

export const deleteLocalTransaction = (deleteId) => {
    localTransactions = [...JSON.parse(localStorage.getItem('transactions'))]
    localStorage.setItem('transactions', JSON.stringify(
        localTransactions.filter(transaction => transaction.id !== deleteId)
    ))
}