// src/components/Legend.js

import React from 'react';

const Legend = () => {
  return (
    <div className="legend">
      <h3>Legend</h3>
      <div className="legend-item">
        <div className="legend-color" style={{ backgroundColor: 'red' }}></div>
        <span>Republican</span>
      </div>
      <div className="legend-item">
        <div className="legend-color" style={{ backgroundColor: 'blue' }}></div>
        <span>Democrat</span>
      </div>
      {/*add more legend items for racial demographics over here in the future*/}
    </div>
  );
};

export default Legend;