"use client";
import { useState } from "react";
import TestCard from "@/components/TestCard";
import QuickStatics from "@/components/QuickStatics";
import ComparisonGraph from "@/components/ComparisonGraph";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";
import QuestionAnalysis from "@/components/QuestionAnalysis";
import { useSelector } from "react-redux";

function Page() {
  const { rank, percentile, score } = useSelector((state) => state.score);
  const [stats, setStats] = useState({
    rank: rank || 1,
    percentile: percentile || "",
    score: score || "",
  });

  const updateStats = (newStats) => {
    setStats((prevStats) => ({ ...prevStats, ...newStats }));
  };
  return (
    <div className="min-h-screen w-full bg-white pt-20 max-h-screen overflow-y-auto">
      <h1 className="text-xl font-semibold text-gray-600 pt-10 pl-10">
        Skill Test
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[60%,40%] px-10 pt-5 gap-10">
        <div className="flex flex-col gap-5">
          <TestCard updateStats={updateStats} stats={stats} />
          <QuickStatics stats={stats} />
          <ComparisonGraph />
        </div>
        <div className="flex flex-col gap-5 pr-5 mb-10">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
}

export default Page;
