import React from 'react'
import Title from '../layouts/Title'
import { pokedex, project1, chatApp } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          // title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Pizza-App Backend"
          des=" Developed a Pizza Ordering App Backend using Node.js and Express, following the MVC architecture for a clean and scalable structure. Implemented RESTful APIs for user authentication. Integrated MongoDB for efficient data storage and ensured smooth request handling with middleware and error management."
          src={project1}
          repoHref={'https://github.com/bruhDanish/Pizza_App-Backend'}
          liveHref={'https://github.com/bruhDanish/Pizza_App-Backend'}  od
        />
        <ProjectsCard
          title="Pokedex App"
          des=" Built a Pokedex App using React.js, featuring an API integration with Pokémon API to display Pokémon data dynamically. The app demonstrates proficiency in handling asynchronous data fetching and rendering complex UIs. Implemented Reusable Components for better code organization, following React best practices."
          src={pokedex}
          repoHref={'https://github.com/bruhDanish/Pokedex-ReactJs'}
          liveHref={'https://project-pokedex-reactjs.netlify.app/'}
        />
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}
        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        /> */}
        <ProjectsCard
          title="Chatting App"
          des=" Developed a real-time chat application using modern web technologies. Integrated backend functionality using Node.js and WebSocket for managing real-time connections. Utilized MongoDB for efficient storage and retrieval of user messages, ensuring reliable data persistence. Used cloudinary for image storage."
          src={chatApp}
          repoHref={'https://github.com/bruhDanish/Chat-App'}
          liveHref={'https://chat-app-tqvj.onrender.com'}
        />
      </div>
    </section>
  );
}

export default Projects