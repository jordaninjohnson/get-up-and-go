import React from 'react';

import WoundForm from './WoundForm';
import './NewWound.css';

const NewWound = (props) => {
    const saveWoundDataHandler = (enteredWoundData) => {
        const woundData = {
            ...enteredWoundData,
            id: Math.random().toString()
        };
        props.onAddWound(woundData);
        // console.log(woundData);
    }
    return (
        <div className="new-wound">
        <WoundForm onSaveWoundData={saveWoundDataHandler}/>
        </div>
    );
};

export default NewWound;