import React from 'react';
import Chart from '../Chart/Chart';
const WoundsChart = props => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    for (const wound of props.wounds) {
        const woundMonth = wound.date.getMonth(); // starting at 0 => January => 0
        chartDataPoints[woundMonth].value += wound.amount;
    }

    return <Chart dataPoints={chartDataPoints}/>
};

export default WoundsChart;
