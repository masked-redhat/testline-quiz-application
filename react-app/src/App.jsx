import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [quizData, setQuizData] = useState(null);

  // Load quiz data
  useEffect(() => {
    const res = fetch("http://localhost:3002");
    const data = res.then((data) => data.json());

    data.then((_data) => setQuizData(_data));
  }, []);

  return (
    <>
      <Header />
      <main className="h-full min-h-[84vh] flex flex-col items-center justify-center gap-3">
        <Outlet data={quizData} />
      </main>
      <Footer />
    </>
  );
}

export default App;
