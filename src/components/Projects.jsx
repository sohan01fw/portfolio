import { data } from "../lib/data";
import { Nav } from "./Nav";
import User from "./User";

const Projects = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-4">
      <div>
        <User />
      </div>
      <div className="md:flex md:flex-col">
        <Nav />
        <div className=" md:mt-5 md:flex md:flex-wrap md:flex-row md:h-[30rem] md:overflow-y-scroll ">
          {data.map((data, index) => {
            return (
              <div key={index} className="m-3 md:w-80 shadow-lg p-3">
                <div>
                  <img src={data.imgSrc} alt="img" />
                </div>
                <div className="mb-5">
                  <h3 className="font-semibold p-1 mt-3 text-lg">
                    {data.title}
                  </h3>
                  <p className="text-[13px] font-semibold text-gray-700 dark:text-gray-500">
                    <span className="font-bold text-md text-teal-700">
                      Goal:{" "}
                    </span>
                    {data.goal}
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href={data.codeLink} className="underline">
                    Source code
                  </a>
                  {data.siteLink && (
                    <a
                      href={data.siteLink}
                      target="_blank"
                      className="underline"
                    >
                      live code(site/video)
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
