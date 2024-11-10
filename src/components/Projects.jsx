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
        <div className="md:m-10 md:mt-5 md:flex md:flex-wrap md:flex-row">
          {data.map((data, index) => {
            return (
              <div key={index} className="m-3 md:w-80">
                <div>
                  <img src={data.imgSrc} alt="img" />
                </div>
                <div>
                  <h3>{data.title}</h3>
                  <p>{data.desc}</p>
                </div>
                <div className="flex gap-4">
                  <a href={data.codeLink} className="underline">
                    Live code
                  </a>
                  <a href={data.siteLink} className="underline">
                    Source code
                  </a>
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
