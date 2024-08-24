// src/components/MapChart.js

import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { scaleQuantize } from 'd3-scale';
import { Tooltip } from 'react-tooltip';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json';

const MapChart = ({ selectedYear }) => {
  const [tooltipContent, setTooltipContent] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    //this helps us retreive election data based on selected year
    //placeholder data should be replaced with actual API
    setData({/*placeholder data*/});
  }, [selectedYear]);

  const colorScale = scaleQuantize()
    .domain([0, 100])
    .range(["#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"]);

  return (
    <div>
      <ComposableMap projection="geoAlbersUsa" data-tooltip-id="my-tooltip">
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const cur = data[geo.id];
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={cur ? colorScale(cur.value) : "#EEE"}
                    onMouseEnter={() => {
                      const { NAME, STATE } = geo.properties;
                      setTooltipContent(`${NAME}, ${STATE}<br/>Data: ${cur ? cur.value : "N/A"}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    style={{
                      default: {
                        outline: 'none',
                      },
                      hover: {
                        outline: 'none',
                        stroke: '#000',
                        strokeWidth: 0.5,
                      },
                      pressed: {
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <Tooltip id="my-tooltip" html={tooltipContent} />
    </div>
  );
};

export default MapChart;