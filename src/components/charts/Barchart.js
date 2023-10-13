import React from 'react';
import './Barchart.css';

const Barchart = () => {
    const data = [120, 100, 80, 60, 40, 20, 100, 80, 60, 40, 20, 120]; 
    const labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

    return (
        <div className="bar-chart">
            {data.map((value, index) => (
                <div key={index} className="bar-container">
                    <div className="bar" style={{ height: `${value}px` }}></div>
                    <span className="label">{labels[index]}</span>
                </div>
            ))}
        </div>
    );
};

export default Barchart;
