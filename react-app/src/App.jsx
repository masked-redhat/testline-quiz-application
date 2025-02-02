import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router";
import { createContext, useContext, useEffect, useState } from "react";

const QuizDataContext = createContext();

export const useQuizData = () => useContext(QuizDataContext);

function App() {
  const [quizData, setQuizData] = useState(null);

  // Load quiz data
  useEffect(() => {
    const res = fetch("http://localhost:3002"); // promises
    const data = res.then((data) => data.json());

    data.then((_data) => setQuizData(_data)); // set data
  }, []);

  return (
    <QuizDataContext.Provider value={quizData}>
      <Header />
      <main className="h-full min-h-[84vh] flex flex-col items-center justify-center gap-3">
        <Outlet />
      </main>
      <Footer />
    </QuizDataContext.Provider>
  );
}

export default App;
