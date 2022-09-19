import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';
import { Transaction } from './Transaction';

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className='list'>
                {transactions.map(transaction => {
                    return <Transaction key={transaction.id} transaction={transaction} />;
                })}
            </ul>
        </>
    );
};

export default TransactionList;