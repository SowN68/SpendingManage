import React from 'react';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpenseFilter';
import './Expense.css'

const Expenses = (props) => {
            const [filteredYear, setFilteredYear] = useState('2022');
          
            const filterChangeHandler = (selectedYear) => {
              setFilteredYear(selectedYear);
            };
          
            const filteredExpenses = props.items.filter((expense) => {
              return expense.date.getFullYear().toString() === filteredYear;
            });
          
            return (
              <div>
                <div className='expenses'>
                  <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                  />
                  <ExpenseList items={filteredExpenses} />
                </div>
              </div>
            );
          };
          
          export default Expenses;