import React from "react";

export const EducationCard = ({ institute, degree, year, cgpaOrPercentage, marks }) => {
  return (
    <div
      className="p-3 md:p-6 flex flex-col w-full sm:w-72 md:w-80 bg-[#1e293b] 
                 rounded-2xl h-full 
                 shadow-[0_0_20px_#38bdf8,0_10px_25px_#38bdf8]"
    >
      <div className="flex flex-col flex-1 justify-between min-h-[200px]">
        {/* Degree Heading */}
        <div className="mb-4">
          <h3 className="px-2 md:px-4 text-xl md:text-2xl font-bold leading-normal text-[#38bdf8]">
            {degree}
          </h3>
        </div>

        {/* Remaining content: Institute, Year, CGPA/Percentage, Marks */}
        <div className="flex flex-col">
          {/* Institute & Year */}
          <div className="mb-2">
            <p className="px-2 md:px-4 text-sm md:text-md text-gray-300 py-2">{institute}</p>
            <p className="px-2 md:px-4 text-sm text-gray-400">{year}</p>
          </div>

          {/* CGPA or Percentage & Marks */}
          {cgpaOrPercentage && (
            <div className="mb-2 px-2 md:px-4 text-gray-300 text-sm md:text-md">
              <span>
                <strong>CGPA </strong>
                <span className="text-blue-400 font-semibold">Or</span>
                <strong> Percentage:</strong> {cgpaOrPercentage}
              </span>
            </div>
          )}
          {marks && (
            <div className="px-2 md:px-4 text-gray-300 text-sm md:text-md">
              <span>
                <strong>Marks:</strong> {marks}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
