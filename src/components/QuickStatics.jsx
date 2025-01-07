"use client";
import { HiMiniTrophy } from "react-icons/hi2";
import { MdCalendarToday } from "react-icons/md";
import { BsCheckSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function QuickStatics() {
  const { rank, percentile, score } = useSelector((state) => state.score);
  return (
    <div className="bg-white py-5 px-6 rounded-md border border-gray-200 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Statistics
      </h1>
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-full gap-4 sm:gap-0">
        {/* Rank */}
        <div className="flex items-center gap-4 sm:px-3 sm:py-3 w-full sm:w-auto">
          <div className="bg-[#f4f6f8] p-3 rounded-full">
            <HiMiniTrophy size={18} className="text-yellow-500" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">{rank}</h1>
            <p className="text-xs font-medium text-gray-500 uppercase">
              Your Rank
            </p>
          </div>
        </div>

        {/* Percentile */}
        <div className="flex items-center gap-4 sm:border-l sm:px-5 sm:py-3 w-full sm:w-auto">
          <div className="bg-[#f4f6f8] p-3 rounded-full">
            <MdCalendarToday size={18} className="text-blue-700" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">{percentile}%</h1>
            <p className="text-xs font-medium text-gray-500 uppercase">
              Percentile
            </p>
          </div>
        </div>

        {/* Correct Answers */}
        <div className="flex items-center gap-4 sm:border-l sm:px-5 sm:py-3 sm:border-gray-200 w-full sm:w-auto">
          <div className="bg-[#f4f6f8] p-3 rounded-full">
            <BsCheckSquareFill size={18} className="text-green-500" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">{score} / 15</h1>
            <p className="text-xs font-medium text-gray-500 uppercase">
              Correct Answers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
