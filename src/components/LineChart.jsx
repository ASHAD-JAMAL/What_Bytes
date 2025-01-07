"use client";
import React, { PureComponent, }from "react";
import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

const initialData = [
  { name: 0, percentile: 30 },
  { name: 5, percentile: 67 },
  { name: 10, percentile: 89 },
  { name: 15, percentile: 90 },
  { name: 20, percentile: 45 },
  { name: 25, percentile: 100 },
  { name: 30, percentile: 75 },
  { name: 35, percentile: 67 },
  { name: 40, percentile: 89 },
  { name: 45, percentile: 90 },
  { name: 50, percentile: 45 },
  { name: 55, percentile: 100 },
  { name: 60, percentile: 75 },
  { name: 65, percentile: 67 },
  { name: 70, percentile: 89 },
  { name: 75, percentile: 90 },
  { name: 80, percentile: 45 },
  { name: 85, percentile: 100 },
  { name: 90, percentile: 75 },
  { name: 95, percentile: 67 },
  { name: 100, percentile: 89 },
];

const initialState = {
  data: initialData,
  left: "dataMin",
  right: "dataMax",
  refAreaLeft: "",
  refAreaRight: "",
  animation: true,
};

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/highlight-zoom-line-chart-rrj8f4";

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  zoom() {
    let { refAreaLeft, refAreaRight } = this.state;
    const { data } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      this.setState(() => ({
        refAreaLeft: "",
        refAreaRight: "",
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    this.setState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
    }));
  }

  zoomOut() {
    const { data } = this.state;
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+1",
      bottom: "dataMin",
    }));
  }

  render() {
    const { data, left, right, refAreaLeft, refAreaRight } = this.state;

    return (
      <div
        className="highlight-bar-charts"
        style={{ userSelect: "none", width: "100%" }}
      >
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            width={500}
            height={250}
            data={data}
            onMouseDown={(e) => this.setState({ refAreaLeft: e.activeLabel })}
            onMouseMove={(e) =>
              this.state.refAreaLeft &&
              this.setState({ refAreaRight: e.activeLabel })
            }
            onMouseUp={this.zoom.bind(this)}
          >
            {/* Remove the CartesianGrid to remove background grid */}
            <CartesianGrid stroke="none" />
            <XAxis
              allowDataOverflow
              dataKey="name"
              domain={[left, right]}
              type="number"
            />
            <Tooltip />
            <Line
              type="natural"
              dataKey="percentile"
              stroke="#8884d8"
              animationDuration={300}
            />

            {refAreaLeft && refAreaRight ? (
              <ReferenceArea
                yAxisId="1"
                x1={refAreaLeft}
                x2={refAreaRight}
                strokeOpacity={0.3}
              />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
