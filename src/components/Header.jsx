import React from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const navlinks = [
    { id: 1, link: "about", text: "About" },
    { id: 2, link: "/projects", text: "Projects" },
    { id: 3, link: "contact", text: "Contact" },
];

const Header = () => {
    const [show, setShow] = useState(false);
    const showMore = ()=> {
        setShow((prev) => !prev);
    }
    return (
        <div className={`w-full relative ${show && "overflow-hidden h-screen "}`}>
            <div className=" flex justify-between w-full items-center py-8 px-24">
                <h1 className="text-xl w-1/2 font-comfortaa font-bold">KosiVivian</h1>
                <ul className="hidden md:flex gap-10 ">
                    {navlinks.map((item) => (
                        <li key={item.id} className="cursor-pointer hover:text-blue-500">
                            <Link
                                to={item.link}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden" onClick={showMore}>
                    {show ? <FaTimes size={30} /> : <GiHamburgerMenu size={30} />}
                </div>
                {/* small screens */}
                <ul className={` md:hidden px-24 space-y-6 flex flex-col items-center justify-evenly gap-10 absolute top-[100px] left-0 w-full h-screen transition translate-x-30 z-10 duration-500 bg-[#FDC435]  ${show ? "block" : "hidden"}`}>
                    {navlinks.map((item) => (
                        <li key={item.id} className="cursor-pointer hover:text-blue-500">
                            <Link
                                to={item.link}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
