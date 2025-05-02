import React from "react";
import pic from "../assets/picportfolio.jpeg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div id="about" className="md:px-24 px-8 sm:px-12 pt-24 md:pt-32 w-full ">
      <div className=" flex justify-between ">
        <div className="lg:w-1/2 space-y-3">
          <div className="relative block lg:hidden">
            <div className="bg-yellow-400 w-40 h-40 md:w-96 md:h-96 rounded-full"></div>
            <div className="absolute top-4 left-4 h-28 w-28 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img src={pic} alt="pic" />
            </div>
          </div>
          <h1 className="font-nunito font-bold text-lg md:text-4xl text-[#FDC435] ">
            FRONTEND DEVELOPER
          </h1>
          <p className="font-playfair sm:text-2xl text-xl md:text-3xl font-bold">
            Hello, I'm Ojiteli Kosisochukwu Vivian
          </p>
          <p className="font-nunito sm:text-sm text-xs md:text-sm lg:text-base leading-7 text-[#828282]">
            {" "}
            I am a Frontend Web Developer. Experienced in building responsive
            web designs, highly curious about new technologies and driven to
            finding ways to implementing and tackling new challenges. Great
            appetite to learn and improve my skills on Frontend Web Development.
            I am a passionate Frontend Web Developer focused on building
            exceptional digital experience. I hope to explore more technological
            roles in the future.
          </p>
          <div className="flex justify-between md:justify-normal py-5 gap-4">
            <div className="border-2 hover:bg-[#FDC435] border-black rounded-md px-5 py-2">
              <NavLink to="https://github.com/vivajane" target="_blank">
                GitHub
              </NavLink>
            </div>
            <div className="border-2 border-black hover:bg-[#FDC435] rounded-md px-5 py-2">
              {" "}
              <NavLink
                to="https://docs.google.com/document/d/1R0syAnLdlBbzqpCYGQf5JXaTp4VDqVto/edit?usp=sharing&ouid=102718640907764121584&rtpof=true&sd=true"
                target="_blank"
              >
                Resume
              </NavLink>
            </div>
          </div>
        </div>
        <div className="relative lg:block hidden">
          <div className="bg-yellow-400 w-40 h-40 lg:w-96 lg:h-96 rounded-full"></div>
          <div className="absolute top-4 left-4 h-28 w-28 lg:w-80 lg:h-80 rounded-full overflow-hidden">
            <img src={pic} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
