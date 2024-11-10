import github from "../assets/github.png";

import twitter from "../assets/twitter.png";

import linkedin from "../assets/linkedin.png";

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
              <img
                src={github}
                alt="github_img"
                className="h-auto w-10"
              />
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
              <img
              src = {twitter}
                alt="twitter_img"
                className="h-auto w-10"
              />
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
              <img
              src = {linkedin}
                alt="linkedin_img"
                className="h-auto w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
