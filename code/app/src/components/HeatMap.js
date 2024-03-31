import React from 'react';
import { Group } from '@visx/group';
import genBins from '@visx/mock-data/lib/generators/genBins';
import { scaleLinear } from '@visx/scale';
import { HeatmapCircle, HeatmapRect } from '@visx/heatmap';
import { getSeededRandom } from '@visx/mock-data';

const hot1 = '#77312f';
const hot2 = '#f33d15';
const cool1 = '#122549';
const cool2 = '#b4fbde';
export const background = '#28272c';

const seededRandom = getSeededRandom(0.41);

const binData = genBins(
  /* length = */ 16,
  /* height = */ 16,
  /** binFunc */ (idx) => 150 * idx,
  /** countFunc */ (i, number) => 25 * (number - i) * seededRandom()
);
console.log(binData)

function max(data, value) {
  return Math.max(...data.map(value));
}

function min(data, value) {
  return Math.min(...data.map(value));
}

// accessors
const bins = (d) => d.bins;
const count = (d) => d.count;

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
const rectColorScale = scaleLinear({
  range: [cool1, cool2],
  domain: [0, colorMax]
});
const opacityScale = scaleLinear({
  range: [0.1, 1],
  domain: [0, colorMax]
});

const defaultMargin = { top: 10, left: 20, right: 20, bottom: 110 };

function BasicHeatMap({
  width,
  height,
  events = false,
  margin = defaultMargin,
  separation = 20
}) {
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

  return width < 10 ? null : /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height
  }, /*#__PURE__*/React.createElement("rect", {
    x: 0,
    y: 0,
    width: width,
    height: height,
    rx: 14,
    fill: background
  }), /*#__PURE__*/React.createElement(Group, {
    top: margin.top,
    left: margin.left
  }, /*#__PURE__*/React.createElement(HeatmapCircle, {
    data: binData,
    xScale: d => xScale(d) ?? 0,
    yScale: d => yScale(d) ?? 0,
    colorScale: circleColorScale,
    opacityScale: opacityScale,
    radius: radius,
    gap: 2
  }, heatmap => heatmap.map(heatmapBins => heatmapBins.map(bin => /*#__PURE__*/React.createElement("circle", {
    key: `heatmap-circle-${bin.row}-${bin.column}`,
    className: "visx-heatmap-circle",
    cx: bin.cx,
    cy: bin.cy,
    r: bin.r,
    fill: bin.color,
    fillOpacity: bin.opacity,
    onClick: () => {
      if (!events) return;
      const {
        row,
        column
      } = bin;
      alert(JSON.stringify({
        row,
        column,
        bin: bin.bin
      }));
    }
  }))))), /*#__PURE__*/React.createElement(Group, {
    top: margin.top,
    left: xMax + margin.left + separation
  }, /*#__PURE__*/React.createElement(HeatmapRect, {
    data: binData,
    xScale: d => xScale(d) ?? 0,
    yScale: d => yScale(d) ?? 0,
    colorScale: rectColorScale,
    opacityScale: opacityScale,
    binWidth: binWidth,
    binHeight: binWidth,
    gap: 2
  }, heatmap => heatmap.map(heatmapBins => heatmapBins.map(bin => /*#__PURE__*/React.createElement("rect", {
    key: `heatmap-rect-${bin.row}-${bin.column}`,
    className: "visx-heatmap-rect",
    width: bin.width,
    height: bin.height,
    x: bin.x,
    y: bin.y,
    fill: bin.color,
    fillOpacity: bin.opacity,
    onClick: () => {
      if (!events) return;
      const {
        row,
        column
      } = bin;
      alert(JSON.stringify({
        row,
        column,
        bin: bin.bin
      }));
    }
  }))))));
}

export default BasicHeatMap;
