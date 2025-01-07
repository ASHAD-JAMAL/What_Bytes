import React from "react";
import { MdAutoGraph } from "react-icons/md";
import { useSelector } from "react-redux";
import LineChartComponent from "./LineChart";

function ComparisonGraph() {
  const { percentile } = useSelector((state) => state.score); // Replace with your state management logic

  return (
    <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="md:flex sm:flex-row md:w-full items-center sm:items-start justify-between mb-6">
        <div className="flex flex-col justify-center mb-4 sm:mb-0 sm:w-3/5 md:w-full">
          <h1 className="text-xl font-semibold text-black">Comparison Graph</h1>
          <p className="text-sm text-black">
            <span className="font-semibold">
              You scored {percentile} percentile{" "}
            </span>
            which is higher than the average percentile (72%) of all engineers
            who took this assessment.
          </p>
        </div>

        {/* Icon Section */}
        <div className="md:flex justify-center hidden bg-[#f4f6f8] p-2 rounded-full">
          <MdAutoGraph className="text-4xl text-blue-800" />
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="px-5 sm:px-10">
        <LineChartComponent userPercentile={percentile} />
      </div>
    </div>
  );
}

export default ComparisonGraph;
