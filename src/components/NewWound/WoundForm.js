import React, { useState } from 'react';
import './WoundForm.css';

const WoundForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // use if depending on previous state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //example of merging 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        //this is perferred. If you depend on Previous State Use this!
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        //example of merging 
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });

        //this is perferred. If you depend on Previous State Use this!
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value};
        // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        //example of merging 
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

        //this is perferred. If you depend on Previous State Use this!
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value};
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const woundData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(woundData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-wound__controls">
                <div className="new-wound__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-wound__control">
                    <label>Amount</label>
                    <input type="number" min='0' step='1' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-wound__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2024-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="submit" >Add Wound</button>
            </div>
        </form>
    );
};

export default WoundForm;