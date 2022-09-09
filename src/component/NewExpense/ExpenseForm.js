import React from 'react'
import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
            const [enteredTitle, setEnteredTitle] = useState();
            const [enteredAmount, setEnteredAmount] = useState();
            const [enteredDate, setEnteredDate] = useState();
            const handleChangeTitle = (e) => {

                        setEnteredTitle(e.target.value)

            }
            const handleChangeAmount = (e) => {

                        setEnteredAmount(e.target.value)

            }
            const handleChangeDate = (e) => {

                        setEnteredDate(e.target.value)

            }
            const handleSubmited = (event) => {
                        event.preventDefault();
                    
                        const expenseData = {
                          title: enteredTitle,
                          amount: enteredAmount,
                          date: new Date(enteredDate),
                        };
                    
                        props.onSaveExpenseData(expenseData);
                        setEnteredTitle('');
                        setEnteredAmount('');
                        setEnteredDate('');
            };
                        return (

                                    <form onSubmit={handleSubmited} >
                                                <div className='new-expense__controls'>
                                                            <div className='new-expense__control'>
                                                                        <label>Title</label>
                                                                        <input value={enteredTitle}
                                                                                    onChange={handleChangeTitle} />
                                                            </div>
                                                            <div className='new-expense__control'>
                                                                        <label>Amount</label>
                                                                        <input type='number'
                                                                                    min={0.01}
                                                                                    step={0.01}
                                                                                    onChange={handleChangeAmount} />
                                                            </div>
                                                            <div className='new-expense__control'>
                                                                        <label>Date</label>
                                                                        <input type='date'
                                                                                    min='2019-01-01'
                                                                                    max='2022-12-31'
                                                                                    onChange={handleChangeDate} />
                                                            </div>
                                                </div>

                                                <div className='new-expense__actions'>

                                                            <button type='submit'>Add Expense</button>
                                                            <button type='submit' className='btn-cancle' onClick={props.onCancle}>Cancle</button>
                                                </div>
                                    </form>
                        )
            }
export default ExpenseForm;