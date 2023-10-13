import React from 'react';
import './Piechart.css';

const Piechart = () => {
    return (
		<div class="stats-info">
			<div class="graph-container">
				<div class="percent">
                <svg viewBox="0 0 36 36" class="circular-chart">
  <path class="circle" stroke="red" stroke-dasharray="100, 100" d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831" />
  <path class="circle" stroke="blue" stroke-dasharray="85, 100" d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831" />
  <path class="circle" stroke="grey" stroke-dasharray="60, 100" d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831" />
</svg>


				</div>
				<p>Total: $2075</p>
			</div>
            </div>
    );
};

export default Piechart;