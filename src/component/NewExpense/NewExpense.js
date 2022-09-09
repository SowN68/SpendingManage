import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import './NewExpense.css'
const NewExpense = (props) => {
            const saveExpenseData = (enteredData) => {
                        const expenseData = {
                                    ...enteredData,
                                    id: Math.random().toString()
                        }
                        console.log(expenseData)
                        props.onAddExpense(expenseData)
            }
            const [isShowed, setIsShowed] = useState(false);
            const onShow = () => {
                        setIsShowed(true)
            }
            const stopShow = () => {
                        setIsShowed(false)
            }
            return (
                        <div className="new-expense">
                                    {
                                                !isShowed && <button onClick={onShow}>Add New Expense</button>
                                    }
                                    {
                                                isShowed && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancle = {stopShow} />
                                    }
                                    
                      </div>
          )  
}
export default NewExpense;