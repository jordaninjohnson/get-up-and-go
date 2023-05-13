import React, { useState } from 'react';

import './WoundItem.css';
import Card from '../UI/Card';
import WoundDate from './WoundDate';
function WoundItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickhandler = () => {
        setTitle('Updated!');
    }
    return (
        <Card className="wound-item">
            <WoundDate date={props.date} />
            <div className="wound-item__description">
                <h2>{title}</h2>
                <div className='wound-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickhandler}>Change Title</button>
        </Card>
    );
}

export default WoundItem;