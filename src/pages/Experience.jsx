import React from 'react'

const experiences = [
    {
        id: 1,
        title: 'Frontend Web Developer',
        company: 'InternPulse- Remote',
        
        date: 'JUNE 2023 - AUGUST 2023',
        points: [
                `Contributed to the development of a family account management app designed to simplify and streamline the management of financial resources for families. `,
                `Developed responsive user interfaces for web applications using HTML, Tailwind  CSS, and React.`,
                `Implemented efficient and user-friendly navigation and routing using React Router.`,
                `Collaborated with cross-functional teams to ensure the successful delivery of the project.`,
                `Utilized Git for version control and collaboration with team members.`,

        ],
    },
    
    {
        id: 2,
        title: 'Frontend Web Developer',
        company: 'Elva Technologies- Remote',
        
        date: 'JULY 2024 - JANUARY  2025',
        points: [
                `Developed and optimized reusable UI components using React and Tailwind CSS. `,
                `Collaborated with the team on GitHub, contributing to feature development, bug fixes, and improvements.`,
                `Participated in code reviews, providing feedback and suggestions to improve code quality and maintainability.`,
                `Worked with modern frontend tools and technologies, ensuring scalable and efficient implementations.`,
                `Utilized Git for version control and collaboration with team members.`,

        ],
    },

]
const Experience = () => {
  return (
    <div id='experience' className='md:px-24 sm:px-12 px-8 py-10'>
        <h1 data-aos="flip-up"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"  className='font-playfair sm:text-xl text-sm md:text-3xl py-6 font-bold text-center'>EXPERIENCES</h1>
      <ul className='space-y-10 '>
        {experiences.map((experience) => (
            <li className='border-2 rounded-lg shadow-2xl py-16 px-8' key={experience.id}><Experiences experience={experience} /></li>

        ))}
      </ul>
    </div>
  )
}

export default Experience
const Experiences = ({experience}) => {
    return (
        <div>
            <p className='font-bold py-2'><span>{experience.title}</span> </p>
            <p className='flex  justify-between'><span className='font-semibold text-[10px] sm:text-sm md:text-base '>{experience.company}</span><span className='font-semibold text-[10px] sm:text-sm md:text-base '>{experience.date}</span></p>
            <p className='py-4 text-[#828282] text-xs sm:text-sm md:text-base font-bold leading-[30px]'>{experience.points.map((point, index) => <div key={index}>{index + 1}.  {point}</div>)}</p>
        </div>
    )
}