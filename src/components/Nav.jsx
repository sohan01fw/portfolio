import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="mt-5 gap-4 flex">
      <Link to={"/"} className="p-2 bg-white/10 backdrop-blur-lg rounded-lg  text-xl font-bold">Home</Link>

      <Link to={"/projects"} className="p-2 bg-white/10 backdrop-blur-lg rounded-lg ext-xl font-bold ">
        projects
      </Link>
    </div>
  );
};


