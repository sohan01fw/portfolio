import { Nav } from "./Nav";
import User from "./User";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-4">
      <div>
        <User />
      </div>
      <div className="md:flex md:flex-col">
        <Nav />
        <div className="md:m-10 md:w-[50%] text-sm flex gap-4 flex-col md:flex-row">
          <p className=" break-words mt-5">
            👋 Hi, I’m a Creative Web Developer with a passion for crafting
            user-friendly digital experiences. I thrive on solving complex
            problems with clean, efficient code and love building solutions that
            make life easier. Always learning, always innovating—let’s build
            something great together!
          </p>
          <div className="">
          <p className="mb-5">
            Bachelor of Science in Computer Science and Information Technology
            (BSc. CSIT) Sushma Godawari College, Itahari, Sunsari, Nepal
            Graduated with B+.
            
          </p>
<p className="whitespace-pre-line">

              A rigorous program focused on programming, algorithms, database
              management, and software engineering, blending technical skills
              with practical project experience. Graduated with high academic
              honors, showcasing a strong foundation in both theory and applied
              computer science.
            </p>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
