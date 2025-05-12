import React from "react";

const ResumeCard = () => {
  return (
    <div className="resume-card bg-white rounded-lg p-4 w-64 transform rotate-3 animate-float">
      <div className="border-b border-resume-neutralGray/20 pb-3 mb-3">
        <div className="h-6 bg-sky-400 rounded-md w-3/4 mb-2"></div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-sky-600 rounded-full mr-2"></div>
          <div>
            <div className="h-3 bg-resume-softGray rounded w-24 mb-1"></div>
            <div className="h-2 bg-resume-softGray rounded w-16"></div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-sky-500 mr-2"></div>
          <div className="h-2 bg-resume-softGray rounded w-32"></div>
        </div>
        <div className="h-2 bg-resume-softGray rounded w-full"></div>
        <div className="h-2 bg-resume-softGray rounded w-5/6"></div>
        <div className="h-2 bg-resume-softGray rounded w-4/6"></div>
      </div>

      <div className="mt-4 border-t border-resume-neutralGray/20 pt-3">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-sky-600 mr-2"></div>
          <div className="h-2 bg-resume-softGray rounded w-20"></div>
        </div>
        <div className="mt-2 flex space-x-1">
          <div className="h-5 bg-sky-400 rounded w-12"></div>
          <div className="h-5 bg-sky-400 rounded w-12"></div>
          <div className="h-5 bg-sky-400 rounded w-12"></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
