import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-[60%] flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Syed Danish Hussain</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        👋 Hi there! I'm a passionate and creative Developer with a unique blend of skills from a non-tech background. My journey into the world of coding has been driven by curiosity and dedication. <br/> Let's connect and explore how my diverse background and technical skills can contribute to your next project!
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Connect with me
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/bruhDanish" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/syed-danish-hussain-1a4610218" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/syed-danish-hussain-1a4610218" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/syed-danish-hussain-1a4610218" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
