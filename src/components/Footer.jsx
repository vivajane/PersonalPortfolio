import React from "react";
import { SiVercel } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-10  ">
      <div className="flex gap-5 justify-center">
        <div>
          <NavLink to="https://vercel.com/ojiteli-kosisochukwus-projects">
            <SiVercel size={30} />
          </NavLink>
        </div>
        <div>
          <NavLink to="https://github.com/vivajane">
            <FaGithub size={30} />
          </NavLink>
        </div>
        <div>
          <NavLink to="https://www.linkedin.com/in/vivianojiteli/">
            <FaLinkedin size={30} />
          </NavLink>
        </div>
      </div>
      <div className="text-center">@ojiteli kosisochukwu 2025</div>
    </div>
  );
};

export default Footer;
