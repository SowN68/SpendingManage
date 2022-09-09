import './App.css';
import { useState } from 'react'
import Expenses from './component/Expense/Expense';
import NewExpenses from './component/NewExpense/NewExpense';
const DUMMY_EXPENSES = [
            {
              id: 'e1',
              title: 'Toilet Paper',
              amount: 94.12,
              date: new Date(2020, 7, 14),
            },
            { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
            {
              id: 'e3',
              title: 'Car Insurance',
              amount: 294.67,
              date: new Date(2021, 2, 28),
            },
            {
              id: 'e4',
              title: 'New Desk (Wooden)',
              amount: 450,
              date: new Date(2022, 5, 12),
            },
          ];
function App() {
            const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
            const addExpenseHandler = (enteredExpenseData) => {
                        setExpenses(prev => {
                                    return[enteredExpenseData,...prev]
                        })
                        console.log('In Expense Data')
                        console.log(expenses)
            }
            return (
                        <div>
                                    <NewExpenses onAddExpense={addExpenseHandler} />
                                    <Expenses items={expenses} />
                                    
                        </div>
                      );

}

export default App;
