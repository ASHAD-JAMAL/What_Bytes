"use client";

import React from "react";

const ProgressBar = ({ label, percentage, color, bgColor }) => {
  return (
    <div className="mb-8">
      <div className="text-gray-800 font-medium mb-2">{label}</div>
      <div className="flex items-center">
        <div className={`w-full h-2 ${bgColor} rounded-full overflow-hidden`}>
          <div
            className={`h-full rounded-full ${color}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="ml-4 text-gray-800 font-semibold">{percentage}%</div>
      </div>
    </div>
  );
};

const ProgressBarContainer = () => {
  const progressData = [
    {
      label: "HTML Tools, Forms, History",
      percentage: 80,
      color: "bg-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      label: "Tags & References in HTML",
      percentage: 60,
      color: "bg-orange-500",
      bgColor: "bg-orange-100",
    },
    {
      label: "Tables & References in HTML",
      percentage: 24,
      color: "bg-red-500",
      bgColor: "bg-red-100",
    },
    {
      label: "Tables & CSS Basics",
      percentage: 96,
      color: "bg-green-500",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="border border-gray-200 px-6 pt-5 pb-10 rounded-md bg-white">
      <h3 className="text-lg font-bold mb-6 text-gray-900">
        Syllabus Wise Analysis
      </h3>
      {progressData.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          percentage={item.percentage}
          color={item.color}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  );
};

export default ProgressBarContainer;
