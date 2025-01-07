"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";
import target from "../assets/target.png";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ solved, total }) => {
  const percentage = (solved / total) * 100;

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#2b58ff", "#dfe5ff"],
        // hoverBackgroundColor: ["#dfe5ff"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="relative w-40 h-40">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={target}
          alt="Center Icon"
          width={200}
          height={200}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

const QuestionAnalysis = () => {
  const { score } = useSelector((state) => state.score);
  const chartData = [{ solved: score, total: 15 }];
  return (
    <div className="bg-white p-5 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-black">Question Analysis</h1>
        <span className="text-blue-600 font-semibold">
          {chartData[0].solved}/{chartData[0].total}
        </span>
      </div>
      <p className="text-sm text-black mb-10">
        <span className="font-semibold">
          You solved {chartData[0].solved} questions correct out of{" "}
          {chartData[0].total}.
        </span>{" "}
        However, you still need some improvements.
      </p>

      <div className="flex flex-wrap justify-center items-center">
        {chartData.map((data, index) => (
          <DoughnutChart key={index} solved={data.solved} total={data.total} />
        ))}
      </div>
    </div>
  );
};

export default QuestionAnalysis;
