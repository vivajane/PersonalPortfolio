import React from "react";
import agro from "../assets/images/agr.png";

import vivys from "../assets/images/vivysfashion.png";
import famtrust from "../assets/images/famtrustproject.png";
import laundry from "../assets/images/laundyEase.png";
import medtech from "../assets/images/medtech.png";
import timbu from "../assets/images/timbu.png";
import cosmos from "../assets/images/cosmos.png";
import { NavLink } from "react-router-dom";
import funverge from "../assets/images/funverege.png";
const projects = [
  {
    id: 1,
    title: "MEDTECH -Online Healthcare Booking Platform",
    description: `A responsive full-stack web application that enables patients to seamlessly book doctor appointments online. Features include doctor listings, appointment scheduling, and user authentication, all within a clean and intuitive interface.`,
    image: medtech,
    link: "https://med-tech-theta.vercel.app/",
    stack: ["React", "Tailwind CSS", "FireBase", "Render", "Express.js"],
  },
  {
    id: 2,
    title: "TIMBU WEBSITE -E-Commerce Marketplace",
    description: `Timbu is a full-stack e-commerce platform that facilitates user-to-user buying and selling of products. It features product listings, cart functionality, secure checkout, and payment integration with Paystack.`,
    image: timbu,
    link: "https://timbu-e-commerce-app.vercel.app/",
    stack: ["React", "Tailwind CSS", "FireBase", "PayStack"],
  },
  {
    id: 3,
    title: "FunVerge -Family Recreation Center",
    description: `FunVerge is a full-stack web application that provides a family recreation center that provides a safe and fun environment for children to play and explore. It features activities listings, cart functionality, secure checkout, and payment integration with Paystack.`,
    stack: ["NextJs", "Tailwind CSS", "FireBase", "PayStack"],
    image: funverge,
    link: "https://fun-verge.vercel.app/",
  },

  {
    id: 4,
    title: "COSMOS -Agricultural Investment Platform",
    description: `Cosmos connects investors with secure, sustainable agricultural projects. The platform presents opportunities for investing in vetted farming operations, with real-time updates and easy tracking.

`,
    stack: ["React", "Tailwind CSS", "FireBase"],
    image: cosmos,
    link: "https://cosmos-five-beta.vercel.app/",
  },

  {
    id: 5,
    title: "AGROLINK -Digital Marketplace for Farmers",
    description: `AgroLink empowers local farmers by providing a platform to showcase and sell their products directly to consumers. It streamlines the farm-to-table process while improving visibility and income for rural sellers.`,
    image: agro,
    stack: ["React", "Css, Express.js"],
    link: "https://agrolink-wheat.vercel.app/",
  },
  {
    id: 6,
    title: "LAUNDRY EASE -Laundry Service Scheduling App",
    description: `Laundry Ease allows users to schedule and manage laundry services with ease. Features include service selection, time-slot booking, and pricing visibility in a mobile-friendly interface.`,
    image: laundry,
    stack: ["React", "Tailwind CSS"],
    link: "https://laundry-ease.vercel.app/",
  },

  {
    id: 7,
    title: "FARMTRUST -Family Account Management Tool",
    description: `FarmTrust is a web app designed to help families manage their shared financial resources. Users can create accounts, track contributions, and monitor spending in a simple dashboard.

`,
    image: famtrust,
    stack: ["React", "Tailwind CSS, Node.js", "Express.js"],
    link: "http://famtrustproject.vercel.app/",
  },
  {
    id: 8,
    title: "VIVYS FASHION -Fashion Storefront & Cart",
    description: ` A fashion-focused shopping platform where users can browse product catalogs, add items to cart, view order summaries, and simulate checkout. Designed with an eye for clean UI and product visibility.`,
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
        <p className="font-semibold">
          {project.stack.join(", ").toUpperCase()}
        </p>
      </div>
      <div className="flex justify-between">
        <a href={project.link} target="_blank"
  rel="noopener noreferrer">
          <div className="border-[1px] border-black hover:bg-[#FDC435] rounded-md px-5 py-2 w-36">
            View Project
          </div>
        </a>
      </div>
    </div>
  );
};
