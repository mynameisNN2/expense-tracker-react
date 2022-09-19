
import { GlobalContext } from '../context/Globalstate';
import React, { useContext } from 'react';



export const Transaction = ({ transaction }) => {


    const { deleteTransaction } = useContext(GlobalContext);


    const sign = transaction.amount < 0 ? '-' : '+';


    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>X</button>
        </li>
    );
};
