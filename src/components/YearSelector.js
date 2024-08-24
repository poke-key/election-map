// src/components/YearSelector.js

import React from 'react';

const YearSelector = ({ selectedYear, onYearChange }) => {
  const years = [2000, 2004, 2008, 2012, 2016, 2020]; //range of years of the 21st century

  return (
    <div className="year-selector">
      <label htmlFor="year-select">Select Year: </label>
      <select
        id="year-select"
        value={selectedYear}
        onChange={(e) => onYearChange(parseInt(e.target.value))}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelector;