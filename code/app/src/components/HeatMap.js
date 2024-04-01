import React from 'react';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { HeatmapCircle } from '@visx/heatmap';

const hot1 = '#77312f';
const hot2 = '#f33d15';
export const background = '#28272c';

function max(data, value) {
  return Math.max(...data.map(value));
}

function min(data, value) {
  return Math.min(...data.map(value));
}

// accessors
const bins = (d) => d.bins;
const count = (d) => d.count;

const defaultMargin = { top: 0, left: 10, right: 10, bottom: 10 };

function BasicHeatMap({
  width,
  height,
  data,
  events = false,
  margin = defaultMargin,
  separation = 20
}) {
  const binData = data || [];

  // If there's no data, return null
  if (binData.length === 0) {
    return null;
  }

  const colorMax = max(binData, (d) => max(bins(d), count));
  const bucketSizeMax = max(binData, (d) => bins(d).length);

  // scales
  const xScale = scaleLinear({
    domain: [0, binData.length]
  });
  const yScale = scaleLinear({
    domain: [0, bucketSizeMax]
  });
  const circleColorScale = scaleLinear({
    range: [hot1, hot2],
    domain: [0, colorMax]
  });
  const opacityScale = scaleLinear({
    range: [0.1, 1],
    domain: [0, colorMax]
  });

  // bounds
  const size =
    width > margin.left + margin.right ? width - margin.left - margin.right - separation : width;
  const xMax = size / 2;
  const yMax = height - margin.bottom - margin.top;

  const binWidth = xMax / binData.length;
  const binHeight = yMax / bucketSizeMax;
  const radius = min([binWidth, binHeight], (d) => d) / 2;

  xScale.range([0, xMax]);
  yScale.range([yMax, 0]);

  // Adjusted height to accommodate the heatmap properly
  const adjustedHeight = yMax + margin.top + margin.bottom;

  return (
    <svg width={width} height={adjustedHeight}>
      <rect x={margin.left} y={margin.top+margin.bottom} width={xMax} height={yMax} fill={background} rx={14} />
      <Group top={margin.top} left={margin.left}>
        <HeatmapCircle
          data={binData}
          xScale={(d) => xScale(d) ?? 0}
          yScale={(d) => yScale(d) ?? 0}
          colorScale={circleColorScale}
          opacityScale={opacityScale}
          radius={radius}
          gap={2}
        >
          {(heatmap) =>
            heatmap.map((heatmapBins) =>
              heatmapBins.map((bin) => (
                <circle
                  key={`heatmap-circle-${bin.row}-${bin.column}`}
                  className="visx-heatmap-circle"
                  cx={bin.cx}
                  cy={bin.cy}
                  r={bin.r}
                  fill={bin.color}
                  fillOpacity={bin.opacity}
                  onClick={() => {
                    if (!events) return;
                    const { row, column } = bin;
                    alert(JSON.stringify({ row, column, bin: bin.bin }));
                  }}
                />
              ))
            )
          }
        </HeatmapCircle>
      </Group>
    </svg>
  );
}

export default BasicHeatMap;
