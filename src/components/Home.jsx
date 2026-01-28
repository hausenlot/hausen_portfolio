import React from 'react';

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
                        I call myself a Full-stack developer. I kinda wannabe one.
                    </p>
                    <a href="/assets/CV NOV-24.pdf" download className="absolute bottom-5 hidden md:block">
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
                    <source src="/assets/road.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="box box-3"> {/* Quote */}
                <div className="box-container bg-accent rounded-lg p-2 px-4 flex justify-center text-center items-center">
                    <span className="font-bold lg:hidden">Long road ahead</span>
                    <span className="font-bold hidden lg:block">There is a long road ahead but I'll be there no matter what.</span>
                </div>
            </div>
            <div className="box box-4"> {/* Experience */}
                <div className="box-container p-2 text-xs">
                    <span className="hidden sm:block font-bold text-xl">Experience:</span>
                    <span className="block font-bold text-sm md:text-xl">Computer Operator</span>
                    <div className="mt-1 text-secondaryText">
                        <span className="block text-sm">City Govt. of Paranaque
                            <span className="sm:hidden inline">HRMO</span>
                            <span className="hidden sm:inline">Human Resources Mgmt. Dept.</span>
                        </span>
                        <span className="block text-xs">2021-2024</span>
                        <span className="block text-xs md:text-base">
                            <span className="hidden sm:inline">One of developers of HRMIS WebApp made mostly using </span>
                            <span className="inline sm:hidden">Made by using:</span>
                            <span className="font-bold text-primaryText">Rails 5</span> and
                            <span className="font-bold text-primaryText">MySQL</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="box relative box-5"> {/* Techs I use */}
                <div className="box-container p-2 flex flex-col sm:hidden">
                    <span className="text-xs font-bold hidden">Techs I use:</span>
                    <div className="icon-container gap-0.5">
                        <div className="icon-wrapper">
                            <img src="/assets/rails.svg" alt="rails icon" className="icon w-5 h-auto" />
                        </div>
                        <div className="text-wrapper">
                            <span className="text-[0.60rem]">Rails</span>
                        </div>
                        <div className="icon-wrapper">
                            <img src="/assets/mysql.svg" alt="mysql icon" className="icon w-5 h-auto" />
                        </div>
                        <div className="text-wrapper">
                            <span className="text-[0.60rem]">MySQL</span>
                        </div>
                        <div className="icon-wrapper">
                            <img src="/assets/js.svg" alt="javascript icon" className="icon w-5 h-auto" />
                        </div>
                        <div className="text-wrapper">
                            <span className="text-[0.50rem]">JavaScript</span>
                        </div>
                        <div className="icon-wrapper">
                            <img src="/assets/html5.svg" alt="html icon" className="icon w-5 h-auto" />
                        </div>
                        <div className="text-wrapper">
                            <span className="text-[0.60rem]">HTML5</span>
                        </div>
                        <div className="icon-wrapper">
                            <img src="/assets/css3.svg" alt="css icon" className="icon w-5 h-auto" />
                        </div>
                        <div className="text-wrapper">
                            <span className="text-[0.60rem]">CSS3</span>
                        </div>
                        <div className="icon-wrapper">
                            <img src="/assets/tailwind.svg" alt="tailwind icon" className="icon w-5 h-auto" />
                        </div>
                        <div className="text-wrapper">
                            <span className="text-[0.60rem]">Tailwind</span>
                        </div>
                    </div>
                </div>
                <div className="box-container p-4 sm:flex flex-col hidden">
                    <span className="text-base font-bold">Technologies I work with:</span>
                    <div className="icon-container gap-2">
                        <div className="icon-wrapper">
                            <img src="/assets/rails.svg" alt="rails icon" className="icon w-10 h-auto" />
                        </div>
                        <div className="icon-wrapper">
                            <img src="/assets/mysql.svg" alt="mysql icon" className="icon w-10 h-auto" />
                        </div>
                        <div className="icon-wrapper">
                            <img src="/assets/js.svg" alt="javascript icon" className="icon w-10 h-auto" />
                        </div>
                        <div className="icon-wrapper">
                            <img src="/assets/html5.svg" alt="html icon" className="icon w-10 h-auto" />
                        </div>
                        <div className="icon-wrapper">
                            <img src="/assets/css3.svg" alt="css icon" className="icon w-10 h-auto" />
                        </div>
                        <div className="icon-wrapper">
                            <img src="/assets/tailwind.svg" alt="tailwind icon" className="icon w-10 h-auto" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="box box-6">  {/* Title */}
                <div className="box-container bg-accent rounded-lg p-2 px-4 flex justify-center items-center text-center">
                    <span className="font-bold text-sm sm:text-lg">Junior Web Developer</span>
                </div>
            </div>
            <div className="box box-7">  {/* Picture */}
                <div className="box-container flex flex-col items-center justify-center space-y-2">
                    <div className="overflow-hidden rounded-full w-16 h-16 md:w-40 md:h-40 flex items-center justify-center">
                        <img src="/assets/pic.jpg" alt="its my face" className="w-full h-full object-cover object-[70%_5%]" />
                    </div>
                    <span className="text-center text-lg md:text-2xl font-semibold md:font-bold">Paul John</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
