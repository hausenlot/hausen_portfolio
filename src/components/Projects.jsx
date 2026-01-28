import React from 'react';

const Projects = () => {
    return (
        <div className="project-container">
            <div className="box box-8"> {/* 1st Project IMG */}
                <img src="/assets/project_1.png" className="rounded-lg" alt="Project 1 Thumbnail" />
            </div>
            <div className="box box-9"> {/* 1st Project Description */}
                <div className="box-container p-2 md:hidden">
                    <a href="https://github.com/hausenlot/quest" target="_blank" rel="noopener noreferrer" className="font-extrabold text-base">To-do (Scheduler)</a>
                    <p className="text-xs text-secondaryText">
                        A very generic CRUD Web-app. Made by using:
                        <span className="highlight">Rails 7</span>,
                        <span className="highlight">Tailwind</span>,
                        <span className="highlight">Flowbite Library</span>,
                        <span className="highlight">Stimulus(JS)</span> and
                        <span className="highlight">PostgreSQL</span>.
                    </p>
                </div>
                <div className="box-container p-4 hidden md:block">
                    <a href="https://github.com/hausenlot/quest" target="_blank" rel="noopener noreferrer" className="font-extrabold text-2xl">To-do (Scheduler)</a>
                    <p className="text-sm text-secondaryText">
                        First Rails 7 WebApp that I made from scratch alone. Made from
                        <span className="highlight">Rails 7</span>,
                        <span className="highlight">Tailwind</span>,
                        <span className="highlight">Flowbite Library</span>,
                        <span className="highlight">Stimulus(JS)</span> and
                        <span className="highlight">PostgreSQL</span>.
                        Since I'm new to Rails 7 I said lets learn new things. Tailwind is really good for scaling the UI in different aspect ratios. Learned a lot 10/10
                    </p>
                </div>
            </div>
            <div className="box box-10 flex items-center justify-center"> {/* 1st Project Link */}
                <a href="https://questlist.fly.dev" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/link.svg" alt="link icon" className="w-4 h-auto" />
                </a>
            </div>
            <div className="box box-11"> {/* 2nd Project IMG */}
                <img src="/assets/ui_repo.png" className="rounded-lg" alt="Project 2 Thumbnail" />
            </div>
            <div className="box box-12"> {/* 2nd Project Description */}
                <div className="box-container p-2 md:hidden">
                    <a href="https://github.com/hausenlot/UI-Repo" target="_blank" rel="noopener noreferrer" className="font-extrabold text-base">UI Repo</a>
                    <p className="text-xs text-secondaryText">
                        My Tailwind Component UI Repositories for front-end projects Made by using:
                        <span className="highlight">Javascript</span>,
                        <span className="highlight">JSON</span>,
                        <span className="highlight">HTML5</span> and
                        <span className="highlight">Tailwind</span>.
                    </p>
                </div>
                <div className="box-container p-4 hidden md:block">
                    <a href="https://github.com/hausenlot/UI-Repo" target="_blank" rel="noopener noreferrer" className="font-extrabold text-2xl">UI Repo (WIP)</a>
                    <p className="text-sm text-secondaryText">
                        My Tailwind Component UI Repositories for front-end projects Made from
                        <span className="highlight">Javascript</span>,
                        <span className="highlight">JSON</span>,
                        <span className="highlight">HTML5</span> and
                        <span className="highlight">Tailwind</span>.
                        This is what my 2 brain cell thinks of to show my front-end skills and my creativity. I abused the fact that you can build a website dynamically using javasript and by feeding it data from a JSON I can pump out different Components without changing anything from the structure of the website.
                    </p>
                </div>
            </div>
            <div className="box box-13 flex items-center justify-center"> {/* 2nd Project Link */}
                <a href="https://hausenlot.github.io/UI-Repo/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/link.svg" alt="link icon" className="w-4 h-auto" />
                </a>
            </div>
        </div>
    );
};

export default Projects;
