import github from "../assets/github.png";

import twitter from "../assets/twitter.png";

import linkedin from "../assets/linkedin.png";
import resumePDF from "../assets/sohanlatestresume.pdf";
import { BsEyeFill } from "react-icons/bs";

const User = () => {
  return (
    <div className="flex flex-col md:ml-14 shadow-lg bg-white/5 backdrop-blur-md rounded-2xl md:w-80 p-10 m-10">
      <div className="flex justify-center">
        <img
          className="rounded-full w-40 h-40"
          src="https://avatars.githubusercontent.com/u/121301775?v=4"
        />
      </div>
      <div className="font-semibold text-sm gap-1 flex flex-col text-center md:max-w-80 mt-8 break-words">
        <h4>sohan shiwakoti(cwact)</h4>

        <h4>Nepal, itahari-9 sunsari</h4>
        <h4>
          <span>sohancwactfw@gmail.com</span>
        </h4>
      </div>
      <div className="flex gap-8 mt-10 justify-center ">
        <div className="bg-teal-300 w-11 rounded-lg">
          <div className="bg-white rounded-lg w-10">
            <a
              target="_blank"
              href="
            https://github.com/sohan01fw
          "
            >
              <img src={github} alt="github_img" className="h-auto w-10" />
            </a>
          </div>
        </div>
        <div className="bg-teal-300 w-11 rounded-lg">
          <div className="bg-white rounded-lg w-10">
            <a
              target="_blank"
              href="
            https://x.com/sohan064
          "
            >
              <img src={twitter} alt="twitter_img" className="h-auto w-10" />
            </a>
          </div>
        </div>
        <div className="bg-teal-300 w-11 rounded-lg">
          <div className="bg-white rounded-lg w-10">
            <a
              target="_blank"
              href="

            https://www.linkedin.com/in/sohan-shiwakoti-1497072a4/
          "
            >
              <img src={linkedin} alt="linkedin_img" className="h-auto w-10" />
            </a>
          </div>
        </div>
      </div>
      {/* resume */}
      <div className="flex justify-center mt-6">
        <a
          href={resumePDF}
          download="Sohan_Shiwakoti_Resume.pdf"
          className="group flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300
                         bg-gradient-to-r from-teal-400 to-teal-600 text-white
                         dark:from-teal-500 dark:to-teal-700
                         hover:scale-105 hover:shadow-lg active:scale-95"
        >
          <BsEyeFill className="text-white group-hover:rotate-[-15deg] transition-transform duration-300" />
          View Resume
        </a>
      </div>
    </div>
  );
};

export default User;
