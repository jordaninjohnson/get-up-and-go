import React, { useState } from 'react';

import WoundItem from './WoundItem.js';
import Card from '../UI/Card.js';
import WoundsFilter from './WoundsFilter.js';
import './Wounds.css';
function Wounds(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (
        <div>
        <Card className="wounds">
        <WoundsFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <WoundItem title={props.wounds[0].title} amount={props.wounds[0].amount} date={props.wounds[0].date}></WoundItem>
            <WoundItem title={props.wounds[1].title} amount={props.wounds[1].amount} date={props.wounds[1].date}></WoundItem>
            <WoundItem title={props.wounds[2].title} amount={props.wounds[2].amount} date={props.wounds[2].date}></WoundItem>
        </Card>
        </div>
    );
}

export default Wounds;