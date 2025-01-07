"use client";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Htmlpng from "../assets/images.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { update } from "@/features/score/scoreSlice";

const inputData = [
  {
    id: 1,
    key: "rank",
    label: "Rank",
    placeholder: "Enter your Rank",
    message: "Please enter  Rank",
  },
  {
    id: 2,
    key: "percentile",
    label: "Percentile",
    placeholder: "Enter your Percentile",
    message: "Please enter a value between 0 and 100",
  },
  {
    id: 3,
    key: "score",
    label: "Current Score (out of 15)",
    placeholder: "Enter your current score",
    message: "Please enter a value between 0 and 15",
  },
];

export default function UpdateScoreModal({ open, handleOpen, stats }) {
  const [formValues, setFormValues] = useState(stats);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };
  const handleSave = () => {
    // Check if any input is empty
    const hasEmptyField = Object.values(formValues).some(
      (value) => value === ""
    );
    if (hasEmptyField) {
      setError("All fields are required!");
      return; // Prevent save if any field is empty
    }
    // If no field is empty, save the form
    dispatch(update(formValues));
    handleOpen();
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <div className="flex justify-between items-center">
        <DialogHeader>Update Score</DialogHeader>
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            src={Htmlpng}
            alt="HTML Logo"
            width={64}
            height={64}
            className="rounded-md"
          />
        </div>
      </div>
      <DialogBody>
        <form className="flex flex-col gap-6">
          {inputData.map((data) => (
            <div
              key={data.id}
              className="flex justify-between items-center gap-4"
            >
              <label className="flex-1">{data.label}</label>
              <div className="flex flex-col">
                <input
                  type={data.type}
                  placeholder={data.placeholder}
                  value={formValues[data.key]}
                  onChange={(e) => handleChange(data.key, e.target.value)}
                  className={`border rounded-md p-2 flex-1 ${
                    formValues[data.key] ? "border-blue-500" : "border-red-500"
                  }`}
                />
                {!formValues[data.key] && (
                  <span className="text-red-500 text-sm mt-1">
                    {data.message}
                  </span>
                )}
              </div>
            </div>
          ))}
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </DialogBody>
      <DialogFooter className="flex justify-end gap-4">
        <Button variant="text" onClick={handleOpen}>
          Cancel
        </Button>
        <Button className="bg-blue-900 text-white" onClick={handleSave}>
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
