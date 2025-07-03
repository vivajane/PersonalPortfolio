import React from "react";
import agro from "../assets/images/agr.png";

import vivys from "../assets/images/vivysfashion.png";
import famtrust from "../assets/images/famtrustproject.png";
import laundry from "../assets/images/laundyEase.png";
import medtech from "../assets/images/medtech.png";
import timbu from "../assets/images/timbu.png";
import cosmos from "../assets/images/cosmos.png";
import { NavLink } from "react-router-dom";
const projects = [
  {
    id: 1,
    title: "MEDTECH",
    description: `MedTech is a healthcare website that allows patients to book their preferred doctor's appointment online. It has user-friendly interface.`,
    image: medtech,
    link: "https://med-tech-theta.vercel.app/",
    stack: ["React", "Tailwind CSS", "FireBase", "Render", "Express"],
  },
  {
    id: 2,
    title: "TIMBU WEBSITE",
    description: `Timbu is an e-commerce site where sales and purchases take place
    between users. It is a platform for buying and selling products online.`,
    image: timbu,
    link: "https://timbu-e-commerce-app.vercel.app/",
    stack: ["React", "Tailwind CSS", "FireBase", "PayStack"],
  },
  {
    id: 3,
    title: "COSMOS",
    description: `Cosmos is a platform for sustainable, secure agricultural investment opportunities.`,
    stack: ["React", "Tailwind CSS", "FireBase"],
    image: cosmos,
    link: "https://cosmos-five-beta.vercel.app/",
  },
  {
    id: 4,
    title: "AGROLINK",
    description: `AgroLink serves that serves as a digital marketplace ,
    empowering farmers to showcase their products directly to
    consumers.`,
    image: agro,
    stack: ["React", "Css"],
    link: "https://agrolink-wheat.vercel.app/",
  },
  {
    id: 5,
    title: "LAUNDRY EASE",
    description: `The laundry website allows users to schedule and manage their
        laundry services online .It provides features like service
        selection and pricing details`,
    image: laundry,
    stack: ["React", "Tailwind CSS"],
    link: "https://laundry-ease.vercel.app/",
  },

  {
    id: 6,
    title: "FARMTRUST",
    description: `Family account management app designed to simplify and
    streamline the management of financial resources for families.`,
    image: famtrust,
    stack: ["React", "Tailwind CSS"],
    link: "http://famtrustproject.vercel.app/",
  },
  {
    id: 7,
    title: "VIVYS FASHION",
    description: ` This is a fashion website where users get to see list of
    displayed proudct, add to cart, view cart and even checkout the product`,
    image: vivys,
    stack: ["React", "css"],
    link: "https://vivys-fashion-house.vercel.app/",
  },
];
const ProjectsCon = () => {
  return (
    <div>
      <h1 className="font-playfair text-3xl py-3 font-bold text-center">
        PROJECTS
      </h1>
      <ul className=" md:px-24  sm:px-12 px-8 py-8  grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
        {projects.map((project) => (
          <li
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="border-2 p-4   rounded-xl flex flex-col justify-between shadow-2xl py-8 px-4 "
            key={project.id}
          >
            <Projects project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsCon;
const Projects = ({ project }) => {
  return (
    <div className="h-ful">
      <img src={project.image} alt={project.title} />
      <h1 className="font-playfair text-2xl font-bold py-6">{project.title}</h1>

      <p className="text-[#828282] font-bold leading-[25px]">
        {project.description}
      </p>
      <div className="py-8">
        <p className="font-semibold">{project.stack. join(", ").toUpperCase()}</p>        
      </div>
      <div className="flex justify-between">
        <NavLink to={project.link}>
          <div className="border-[1px] border-black hover:bg-[#FDC435] rounded-md px-5 py-2 w-36">
            View Project
          </div>
        </NavLink>
      </div>
    </div>
  );
};
