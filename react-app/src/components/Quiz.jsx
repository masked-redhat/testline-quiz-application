import {  useState } from "react";

const Quiz = ({ data }) => {
  const [quizData, setQuizData] = useState(null);

  return quizData === null ? "Loading..." : Question(data);
};

const Question = (data) => {
  return (
    <form>
      <header>
        <h2>{data.description}</h2>
      </header>
      <section>
        {data.options.map((option) => (
          <button
            key={option.id}
            className="block mt-2 p-2 bg-gray-200"
            onClick={() => handleAnswer(option.is_correct)}
          >
            {option.description}
          </button>
        ))}
      </section>
    </form>
  );
};

const handleAnswer = (is_correct) => {};

export default Quiz;
