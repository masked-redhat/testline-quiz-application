import React from "react";
import { useQuizData } from "../App";

const Result = () => {
  const data = useQuizData();

  const getResults = () => {
    if (data === null) return 0;

    let result = 0;
    for (const question of data?.questions) {
      const answer = question.answered ?? false;
      if (answer === true) {
        result += question.correct ? 4 : -1;
      }
    }
    return result;
  };

  return (
    <div>
      <p className="text-xl font-sen">
        You have acquired{" "}
        <span className="font-black text-5xl px-2">{getResults()}</span> points in
        this quiz
      </p>
    </div>
  );
};

export default Result;
