import { useEffect, useState } from "react";
import { useQuizData } from "../App";

const Quiz = () => {
  const data = useQuizData();
  const [cqp, setcqp] = useState(0); // current question position
  const [questions, setQuestions] = useState([]); // questions

  useEffect(() => {
    setQuestions(data?.questions);
  }, [data]); // when data changes

  useEffect(() => {
    setcqp(0); // set current to first question
  }, [questions]); // when question sets in

  const forwardQuestion = () => {
    if (cqp === questions.length - 1) {
    } else setcqp(cqp + 1);
  };

  const rewindQuestion = () => {
    if (cqp === 0) {
    } else setcqp(cqp - 1);
  };

  if (data === null) return <p className="text-xl font-jost">Loading...</p>;

  return (
    <div className="flex flex-col gap-3 w-[800px]">
      <Question data={questions?.[cqp] ?? {}} />
      <div className="flex justify-between gap-2">
        <button onClick={rewindQuestion} disabled={cqp === 0} className="cursor-pointer px-6 py-2 text-lg font-sen bg-gray-100 rounded-md disabled:text-gray-400 select-none">
          &larr; Previous
        </button>
        <button
          onClick={forwardQuestion}
          disabled={cqp === questions?.length - 1} className="cursor-pointer px-6 py-2 text-lg font-sen bg-gray-100 rounded-md disabled:text-gray-400 select-none"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

const Question = ({ data }) => {
  const _data = useQuizData();
  return (
    <form className="flex gap-8 flex-col">
      <header>
        <h2 className="font-sen text-xl h-16">{data?.description}</h2>
      </header>
      <section className="flex flex-col gap-3 font-jost font-semibold text-lg">
        {data?.options?.map((option) => (
          <button
          key={option.id}
          className="px-4 py-3 bg-gray-200 cursor-pointer"
          onClick={(e) => handleAnswer(e, option.is_correct)}
        >

          {option.description}
        </button>
        ))}
      </section>
    </form>
  );
};

const handleAnswer = (e, is_correct) => {
  e.preventDefault();
};

export default Quiz;
