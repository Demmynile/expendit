"use client"
import React from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useCustomState } from '@/hooks/responsive';
import Link from 'next/link';
import styles from './styles';
import { expenses } from '@/dummy';

export interface expense {
  category: String;
  amount: String;
  note: String
};

const Expense = ({ category, amount, note }: expense) => {
  const [ mobile ] = useCustomState();

  return (
    <div 
      className={styles.transactionContainer}
    >
      <span className="flex-1">{category}</span>
      <p className={styles.text}>
        <TbCurrencyNaira fontSize={mobile ? 15 : 20} /> 
        {amount}
      </p>
      <p className="flex-1">{
        mobile 
        ? `${note?.slice(0, 20)}...` 
        : `${note?.slice(0, 35)}...`
        }
      </p>
    </div>
  )
};

const LatestExpenses = () => {
  return (
    <div className={styles.barContainer}>
      <div className={styles.transactionHeader}>
        <h1 className='text-lg'>Latest Expenses</h1>
        <Link href='/history' className={styles.link}>View all</Link>
      </div>
      <div className={styles.transactionsContainer}>
        <div className={styles.transactionsHeader}>
          <p className="flex-1">Category</p>
          <p className="flex-1">Amount</p>
          <p className="flex-1">Note</p>
        </div>
        {expenses.map((data, index) => (
          <Expense key={index} {...data} />
        ))}
      </div>
    </div>
  )
}

export default LatestExpenses