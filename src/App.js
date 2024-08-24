// src/App.js

import React, { useState } from 'react';
import MapChart from './components/MapChart';
import YearSelector from './components/YearSelector';
import Legend from './components/Legend';
//todo add styling

function App() {
  const [selectedYear, setSelectedYear] = useState(2020);

  return (
    <div className="App">
      <h1>US Election Map</h1>
      <div className="controls">
        <YearSelector selectedYear={selectedYear} onYearChange={setSelectedYear} />
      </div>
      <div className="map-container">
        <MapChart selectedYear={selectedYear} />
        <Legend />
      </div>
    </div>
  );
}

export default App;