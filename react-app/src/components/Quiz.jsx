import { useEffect, useState } from "react";
import { useQuizData, useSetQuizData } from "../App";
import { useNavigate } from "react-router";

const Quiz = () => {
  const data = useQuizData();
  const setData = useSetQuizData();
  const [cqp, setcqp] = useState(0); // current question position
  const [questions, setQuestions] = useState([]); // questions
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(data?.questions);
  }, [data]); // when data changes

  // next question
  const forwardQuestion = () => {
    if (cqp === questions.length - 1) {
    } else setcqp(cqp + 1);
  };

  // previous question
  const rewindQuestion = () => {
    if (cqp === 0) {
    } else setcqp(cqp - 1);
  };

  const submit = () => {
    const _data = { ...data };
    _data.questions = questions;
    _data.submitted = true;
    setData(_data);
    navigate("/result"); // navigate to results
  };

  const markQuestionAnswered = (id, correct, answerId) => {
    const _questions = [...questions];
    for (const question of _questions) {
      if (question.id === id) {
        question.answered = true;
        question.correct = correct;
        question.answerId = answerId;
      }
    }
    setQuestions(_questions);
  };

  if (data === null) return <p className="text-xl font-jost">Loading...</p>;

  return (
    <div className="flex flex-col gap-3 w-[800px]">
      <ProgressBar questions={questions} cqp={cqp} />
      <Question
        data={questions?.[cqp] ?? {}}
        mark={markQuestionAnswered}
        submitted={data?.submitted ?? false}
      />
      <div className="flex justify-between gap-2">
        <button
          onClick={rewindQuestion}
          disabled={cqp === 0}
          className="button-renext"
        >
          &larr; Previous
        </button>
        <button
          onClick={
            data?.submitted ?? false ? () => navigate("/result") : submit
          }
          className="submit"
        >
          {data?.submitted ?? false ? "Results" : "Submit"}
        </button>
        <button
          onClick={forwardQuestion}
          disabled={cqp === questions?.length - 1}
          className="button-renext"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

const ProgressBar = ({ questions, cqp }) => {
  return (
    <div className="flex items-center w-[80%] mx-auto relative justify-evenly">
      <div className="absolute bg-gray-300 h-1 rounded-full w-full -z-10"></div>
      {questions?.map((question, index) => (
        <div
          className={`rounded-full transition-all ${
            cqp === index ? "bg-gray-600" : "bg-gray-300"
          } ${question?.answered ?? false ? "bg-green-500" : "bg-gray-300"} ${
            cqp === index ? "h-4 w-4" : "h-3 w-3"
          }`}
        ></div>
      ))}
    </div>
  );
};

const Question = ({ data, mark, submitted }) => {
  const styleWhenNotSubmitted = (optionId, answerId) => {
    return optionId == answerId ? "border-green-500" : "border-gray-200";
  };

  const styleWhenSubmitted = (isCorrect, optionId, answerId) => {
    return isCorrect
      ? "border-green-500"
      : optionId == answerId
      ? "border-red-500"
      : "border-gray-200";
  };

  return (
    <form
      className="flex gap-3 flex-col"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <header className="flex gap-2 flex-col">
        <h2 className="font-sen text-xl h-20 flex items-center py-1">
          {data?.description}
        </h2>
        <div className="flex gap-5 font-sen">
          <p>{data?.topic}</p>
          {data?.answered ? (
            <p className="text-green-500">Answered</p>
          ) : (
            <p className="text-red-500">Unanswered</p>
          )}
          {submitted ? (
            <p className="ml-auto">
              Point Scored :{" "}
              {data?.answered ?? false ? (data.correct ? 4 : -1) : 0}
            </p>
          ) : null}
        </div>
      </header>
      <section className="flex flex-col gap-3 font-jost font-semibold text-lg">
        {data?.options?.map((option) => (
          <button
            key={option?.id}
            className={`option-button ${
              submitted
                ? styleWhenSubmitted(
                    option?.is_correct,
                    option?.id,
                    data?.answerId
                  )
                : styleWhenNotSubmitted(option?.id, data?.answerId)
            } ${submitted ? "relative" : "hover:bg-gray-100"}`}
            disabled={submitted} // if submitted, disabled
            onClick={() => {
              mark(data?.id, option?.is_correct, option?.id);
            }}
          >
            {option.description}
            {submitted ? (
              option?.is_correct ? (
                <p className="tick">✓</p>
              ) : option?.id == data?.answerId ? (
                <p className="cross">✖</p>
              ) : null
            ) : null}
          </button>
        ))}
      </section>
    </form>
  );
};

export default Quiz;
