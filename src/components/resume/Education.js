import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Post Graduate Diploma Computer Applications"
            subTitle="SS Jain Subodh PG College, Jaipur (2022 - 2023)"
            result="A+"
            des="Skills: Web Design · Web Development · Web · Data Analysis · Account Management · Tally ERP · SQL · Database Management System (DBMS) · Systems Design."
          />
          <ResumeCard
            title="Bachelor of Commerce"
            subTitle="SS Jain Subodh PG College, Jaipur (2019 - 2022)"
            // result="A+"
            des="Skills: Business Management, Accounts Management, Economics."
          />
          {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Content Strategist Trainee"
            subTitle="PW IOI - (Feb-25 - Present)"
            result="Bengaluru, Karnataka"
            des="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio."
          />
          <ResumeCard
            title="Web Developer Intern"
            subTitle="CodSoft - (Aug-Sep 2023)"
            result="Remote"
            des="● Developed a fully responsive landing page using HTML, CSS, and JavaScript, focusing on optimizing user experience."
            des2="● Created a dynamic portfolio website showcasing personal projects and skills, implementing responsive design."
            des3="● Designed and built a functional calculator application using JavaScript, enhancing user interactivity and experience."
          />
          {/* <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
