import React from "react";
// import logo from "../images/react-quiz-app.png";
import agro from "../assets/images/agr.png";
// import cart from "../images/cart.png";
// import task from "../images/taskmanager.png";
// import todo from "../images/todolist.png";
import vivys from "../assets/images/vivysfashion.png";
import elva from "../assets/images/elva.png";
import famtrust from "../assets/images/famtrustproject.png";
import laundry from "../assets/images/laundyEase.png";
// import safe from "../images/mini.png";
import timbu from "../assets/images/timbu.png"
import { NavLink } from "react-router-dom";
import { SiVercel } from "react-icons/si";
const projects = [
  {
    id: 1,
    title: "LAUNDRY EASE",
    description: `The laundry website allows users to schedule and manage their
        laundry services online .It provides features like service
        selection and pricing details`,
    image: laundry,
    link: "https://laundry-ease.vercel.app/",
  },
  {
    id: 2,
    title: "AGROLINK",
    description: `AgroLink serves that serves as a digital marketplace ,
    empowering farmers to showcase their products directly to
    consumers.`,
    image: agro,
    link: "https://agrolink-wheat.vercel.app/",
  },
  {
    id: 3,
    title: "TIMBU WEBSITE",
    description: `Timbu is an e-commerce site where sales and purchases take place
    between users. It is a platform for buying and selling products online.`,
    image: timbu,
    link: "https://timbu-e-commerce-app-82zw.vercel.app/",
  },
  {
    id: 4,
    title: "FARMTRUST",
    description: `Family account management app designed to simplify and
    streamline the management of financial resources for families.`,
    image: famtrust,
    link: "http://famtrustproject.vercel.app/"
  },
  {
    id: 5,
    title: "VIVYS FASHION",
    description: ` This is a fashion website where users get to see list of
    displayed proudct, add to cart, view cart and even checkout the product`,
    image: vivys,
    link: "https://vivys-fashion-house.vercel.app/",
  },
  {
    id: 6,
    title: "ELVA",
    description: `Elva Project is a mini e-commerce website , where users can buy and sell products. My introuctory project to React Js`,
    image: elva,
    link: "https://elva-project.vercel.app/",
  },
  
];
const ProjectsCon = () => {
  return <div>
    <h1 className="font-playfair text-3xl py-3 font-bold text-center">PROJECTS</h1>
    <ul className=" md:px-24  sm:px-12 px-8 py-8  grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
        {
            projects.map((project) => (
                <li data-aos="fade-down"
                data-aos-delay="400"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"  className="border-2 p-4   rounded-xl flex flex-col justify-between shadow-2xl py-8 px-4 " key={project.id}>
                    <Projects project={project}/>
                </li>
            ))
        }
    </ul>
  </div>;
};

export default ProjectsCon;
const Projects = ({project})=> {
    return <div className="h-ful">
        <img src={project.image} alt={project.title} />
        <h1 className="font-playfair text-2xl font-bold py-6">{project.title}</h1>
      
        <p className="text-[#828282] font-bold leading-[25px]">{project.description}</p>
        <div className="py-8">
        <NavLink to={project.link}>
            <div className="border-[1px] border-black hover:bg-[#FDC435] rounded-md px-5 py-2 w-36">
                View Project
            </div>

        </NavLink>
        </div>
    </div>

}