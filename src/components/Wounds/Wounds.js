import React, { useState } from 'react';
import WoundsList from './WoundsList.js';
import Card from '../UI/Card.js';
import WoundsFilter from './WoundsFilter.js';
import WoundsChart from './WoundsChart.js';
import './Wounds.css';
function Wounds(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredWounds = props.items.filter(wound => {
        return wound.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <li>
                <Card className="wounds">
                    <WoundsFilter
                        selected={filteredYear}
                        onChangeFilter={filterChangeHandler}
                    />
                    <WoundsChart wounds={filteredWounds} />
                    <WoundsList items={filteredWounds} />
                </Card>
            </li>
        </div>
    );
};

export default Wounds;