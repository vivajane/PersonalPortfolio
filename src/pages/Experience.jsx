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
    <div className='md:px-24 sm:px-12 px-8 py-10'>
        <h1 className='font-playfair sm:text-xl text-sm md:text-3xl py-3 font-bold text-center'>EXPERIENCES</h1>
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
            <p className='flex justify-between'><span className='font-semibold'>{experience.company}</span><span className='font-semibold'>{experience.date}</span></p>
            <p className='py-4 text-[#828282] font-bold leading-[30px]'>{experience.points.map((point, index) => <li key={index}>{point}</li>)}</p>
        </div>
    )
}