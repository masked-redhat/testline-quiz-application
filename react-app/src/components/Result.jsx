import React from "react";
import { useQuizData } from "../App";
import { NavLink } from "react-router";

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
    <div className="flex justify-center items-center flex-col">
      {data?.submitted ?? false ? (
        <>
          <p className="text-2xl font-sen py-4">
            You have acquired{" "}
            <span className="font-black text-5xl px-2">{getResults()}</span>{" "}
            points in this quiz
          </p>
          <NavLink to={"/quiz"} className="landing-button">
            Review
          </NavLink>
        </>
      ) : (
        <>
          <p className="text-2xl font-sen py-4">
            You have never attempted the quiz.
          </p>
          <NavLink to={"/quiz"} className="landing-button">
            Start Quiz
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Result;
