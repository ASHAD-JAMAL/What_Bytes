// LineChartComponent.js
"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: 0, percentile: 10 },
  { name: 25, percentile: 30 },
  { name: 50, percentile: 72 },
  { name: 75, percentile: 90 },
  { name: 100, percentile: 100 },
];

const LineChartComponent = ({ userPercentile }) => {
  return (
    <div style={{ userSelect: "none", width: "100%" }}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 10,
          }}
        >
          <XAxis dataKey="name" tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => `${value} percentile`} />
          <Line
            type="monotone"
            dataKey="percentile"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
          <ReferenceLine
            x={userPercentile}
            stroke="red"
            strokeDasharray="3 3"
            label={{
              value: "your percentile",
              position: "top",
              fill: "red",
              fontSize: 12,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
