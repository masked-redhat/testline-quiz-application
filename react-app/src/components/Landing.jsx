import { NavLink } from "react-router";

const Landing = () => {
  return (
    <NavLink
      to={"/quiz"}
      className="font-sen text-2xl px-4 py-3 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-100 transition-colors"
    >
      Start Quiz
    </NavLink>
  );
};

export default Landing;
