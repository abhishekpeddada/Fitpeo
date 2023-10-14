import React from 'react';
import './Barchart.css';

const Barchart = () => {
    const data = [120, 100, 80, 60, 40, 20, 100, 80, 60, 40, 20, 120]; 
    const labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

    return (
        <div className="barchart-container">
            <div className="barchart-header">
                <div>
                <h2>Overview</h2>
                <p className='earnings'>Monthly Earnings</p>
                </div>
                <select className="selector">
                    <option value="quarterly">Quarterly</option>
                </select>
            </div>
            <div className="bar-chart">
                {data.map((value, index) => (
                    <div key={index} className="bar-container">
                        <div className="bar" style={{ height: `${value}px` }}></div>
                        <span className="label">{labels[index]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Barchart;
