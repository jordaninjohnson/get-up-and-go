import React, { useState } from 'react';

import WoundForm from './WoundForm';
import './NewWound.css';

const NewWound = (props) => {

    const [ isEditing, setIsEditing ] = useState(false);

    const saveWoundDataHandler = (enteredWoundData) => {
        const woundData = {
            ...enteredWoundData,
            id: Math.random().toString()
        };
        props.onAddWound(woundData);
        setIsEditing(false);
        // console.log(woundData);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-wound">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Wound</button>
            )}
            {isEditing && (
                <WoundForm
                    onSaveWoundData={saveWoundDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewWound;