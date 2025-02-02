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
      <Question
        data={questions?.[cqp] ?? {}}
        mark={markQuestionAnswered}
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
          onClick={submit}
          className="button-renext bg-green-500 text-white hover:bg-green-400"
        >
          Submit
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

const Question = ({ data, mark }) => {
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
        </div>
      </header>
      <section className="flex flex-col gap-3 font-jost font-semibold text-lg">
        {data?.options?.map((option) => (
          <button
            key={option?.id}
            className={`px-4 py-3 bg-gray-200 cursor-pointer rounded-md disabled:cursor-default border-2 ${
              option?.id == data?.answerId
                ? "border-green-500"
                : "border-gray-200"
            }`}
            onClick={() => {
              mark(data?.id, option?.is_correct, option?.id);
            }}
          >
            {option.description}
          </button>
        ))}
      </section>
    </form>
  );
};

const handleAnswer = (option) => {
  console.log(option);
};

export default Quiz;
