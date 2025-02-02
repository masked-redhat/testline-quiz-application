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
      <p className="text-2xl font-sen py-4">
        You have acquired{" "}
        <span className="font-black text-5xl px-2">{getResults()}</span> points
        in this quiz
      </p>
      {data === null ? null : (
        <section className="mt-3">
          <header>
            <h2 className="text-xl font-sen font-black">Summary : </h2>
          </header>
          <div className="w-[800px]">
            {data?.questions.map((question, index) => {
              console.log(index);
              return (
                <>
                  {review(question, index + 1, data?.questions.length + 1)}
                  {index !== data?.questions.length - 1 ? (
                    <hr className="my-10" />
                  ) : null}
                </>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

const review = (question, number, totals) => {
  return (
    <section className="flex gap-3 flex-col my-3">
      <header className="flex gap-2 flex-col">
        <span className="text-lg font-sen font-extralight text-gray-600">
          Question <span className="text-3xl font-black text-black">{number}</span>/{totals}
        </span>
        <h2 className="font-sen text-xl flex items-center py-1">
          {question?.description}
        </h2>
        <div className="flex gap-5 font-sen">
          <p>{question?.topic}</p>
          {question?.answered ? (
            <p className="text-green-500">Answered</p>
          ) : (
            <p className="text-red-500">Unanswered</p>
          )}
        </div>
      </header>
      <section className="flex flex-col gap-3 font-jost font-semibold text-base">
        {question?.options?.map((option) => (
          <span
            key={option?.id}
            className={`px-4 py-3 relative bg-gray-200 flex justify-center items-center rounded-md border-2 ${
              option?.is_correct
                ? "border-green-500"
                : option?.id == question?.answerId
                ? "border-red-500"
                : "border-gray-200"
            }`}
          >
            {option.description}
            {option?.is_correct ? (
              <p className="font-jost text-[10px] absolute bg-green-500 text-white py-0.5 px-1.5 rounded-full -right-2.5">
                ✓
              </p>
            ) : null}
          </span>
        ))}
      </section>
    </section>
  );
};

export default Result;
