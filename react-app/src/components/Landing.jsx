import { NavLink } from "react-router";

const Landing = () => {
  return (
    <NavLink
      to={"/quiz"}
      className="landing-button"
    >
      Start Quiz
    </NavLink>
  );
};

export default Landing;
