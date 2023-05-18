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
                <WoundsFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map((wound) => (
                    <WoundItem
                        title={wound.title}
                        amount={wound.amount}
                        date={wound.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Wounds;