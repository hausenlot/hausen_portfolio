
import React from 'react';
import cvPdf from '/assets/FULLSTACK22026.pdf'
import roadMp4 from '/assets/road.mp4'
import nodeSvg from '/assets/node.svg'
import expressSvg from '/assets/express.svg'
import reactSvg from '/assets/react.svg'
import mongodbSvg from '/assets/mongodb.svg'
import mysqlSvg from '/assets/mysql.svg'
import pythonSvg from '/assets/python.svg'
import html5Svg from '/assets/html5.svg'
import css3Svg from '/assets/css3.svg'
import tailwindSvg from '/assets/tailwind.svg'
import picJpg from '/assets/pic.jpg'


const Home = () => {
    return (
        <div className="home-container">
            <div className="box box-1"> {/* About me */}
                <div className="box-container p-3">
                    <span className="font-bold text-base md:text-xl">About me</span>
                    <p className="font-thin text-base md:text-md overflow-hidden text-ellipsis line-clamp-2 md:line-clamp-none hidden sm:block">
                        Hello! I'm Paul John Sopranes from Philippines, I call my self a Full Stack Developer. I'm an Undergraduate and self taught, it rough here but its fun.
                    </p>
                    <p className="font-thin text-sm mt-1 md:text-md sm:hidden ">
                        Nowadays, I solve problems and create solutions for the web.
                    </p>
                    <a href={cvPdf} download className="absolute bottom-5 hidden md:block">
                        <p>Download My Resume</p>
                    </a>
                </div>
            </div>
            <div className="box box-2"> {/* Video clip */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                >
                    <source src={roadMp4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="box box-3"> {/* Quote */}
                <div className="box-container bg-accent rounded-lg p-2 px-4 flex justify-center text-center items-center">
                    <span className="lg:hidden">¯\(ツ)/¯</span>
                    <span className="font-bold hidden lg:block">There is a long road ahead but I'll be there no matter what.</span>
                </div>
            </div>
            <div className="box box-4"> {/* Experience */}
                <div className="box-container p-2 text-xs">
                    <span className="hidden sm:block font-bold text-xl">Experience:</span>
                    <span className="block font-bold text-sm md:text-xl">Software Developer</span>
                    <div className="mt-1 text-secondaryText">
                        <span className="block text-sm">ASG Platform
                            {/* <span className="sm:hidden inline">HRMO</span>
                            <span className="hidden sm:inline">Human Resources Mgmt. Dept.</span> */}
                        </span>
                        <span className="block text-xs">2025-Present</span>
                        <span className="block text-xs md:text-base">
                            {/* <span className="hidden sm:inline">One of developers of HRMIS WebApp made mostly using </span>
                            <span className="inline sm:hidden">Made by using:</span>
                            <span className="font-bold text-primaryText">Rails 5</span> and
                            <span className="font-bold text-primaryText">MySQL</span>
                             */}
                            <span className="hidden sm:inline">I am making a very wide of range of applications. From traditional Full Stack development or AI Agents, Automation, Audio Engineering, 3D Rendering. I experienced all of it here</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="box relative box-5 overflow-hidden"> {/* Techs I use */}
                <div className="box-container p-1 sm:p-3 flex flex-col items-center justify-center">
                    <span className="hidden sm:block text-xs md:text-base font-bold mb-2 text-center leading-tight">Technologies I work with:</span>
                    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 content-center h-full">
                        {/* 1. Node */}
                        <div className="flex flex-col items-center justify-center gap-0.5 md:gap-1 w-auto sm:w-8 md:w-12">
                            <img src={nodeSvg} alt="node icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 object-contain" />
                            <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.6rem] font-medium">Node</span>
                        </div>
                        {/* 2. Express */}
                        <div className="flex flex-col items-center justify-center gap-0.5 md:gap-1 w-auto sm:w-8 md:w-12">
                            <img src={expressSvg} alt="express icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 object-contain text-white" style={{ filter: 'invert(1)' }} />
                            <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.6rem] font-medium">Express</span>
                        </div>
                        {/* 3. React */}
                        <div className="flex flex-col items-center justify-center gap-0.5 md:gap-1 w-auto sm:w-8 md:w-12">
                            <img src={reactSvg} alt="react icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 object-contain" />
                            <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.6rem] font-medium">React</span>
                        </div>
                        {/* 4. Mongodb */}
                        <div className="flex flex-col items-center justify-center gap-0.5 md:gap-1 w-auto sm:w-8 md:w-12">
                            <img src={mongodbSvg} alt="mongodb icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 object-contain" />
                            <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.6rem] font-medium">Mongodb</span>
                        </div>
                        {/* 5. MySQL */}
                        <div className="flex flex-col items-center justify-center gap-0.5 md:gap-1 w-auto sm:w-8 md:w-12">
                            <img src={mysqlSvg} alt="mysql icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 object-contain" />
                            <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.6rem] font-medium">MySQL</span>
                        </div>
                        {/* 6. Python */}
                        <div className="flex flex-col items-center justify-center gap-0.5 md:gap-1 w-auto sm:w-8 md:w-12">
                            <img src={pythonSvg} alt="python icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 object-contain" />
                            <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.6rem] font-medium">Python</span>
                        </div>
                        {/* 7. HTML */}
                        <div className="flex flex-col items-center justify-center gap-0.5 md:gap-1 w-auto sm:w-8 md:w-12">
                            <img src={html5Svg} alt="html icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 object-contain" />
                            <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.6rem] font-medium">HTML</span>
                        </div>
                        {/* 8. CSS */}
                        <div className="flex flex-col items-center justify-center gap-0.5 md:gap-1 w-auto sm:w-8 md:w-12">
                            <img src={css3Svg} alt="css icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 object-contain" />
                            <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.6rem] font-medium">CSS</span>
                        </div>
                        {/* 9. Tailwind */}
                        <div className="flex flex-col items-center justify-center gap-0.5 md:gap-1 w-auto sm:w-8 md:w-12">
                            <img src={tailwindSvg} alt="tailwind icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 object-contain" />
                            <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.6rem] font-medium">Tailwind</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box box-6">  {/* Title */}
                <div className="box-container bg-accent rounded-lg p-2 px-4 flex justify-center items-center text-center">
                    <span className="font-bold text-sm sm:text-lg">Software Engineer</span>
                </div>
            </div>
            <div className="box box-7">  {/* Picture */}
                <div className="box-container flex flex-col items-center justify-center space-y-2">
                    <div className="overflow-hidden rounded-full w-16 h-16 md:w-40 md:h-40 flex items-center justify-center">
                        <img src={picJpg} alt="its my face" className="w-full h-full object-cover object-[70%_5%]" />
                    </div>
                    <span className="text-center text-lg md:text-2xl font-semibold md:font-bold">Paul John</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
