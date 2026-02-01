import React, { useState } from 'react';
import project1Png from '/assets/project_1.png'
import uiRepoPng from '/assets/ui_repo.png'
import linkSvg from '/assets/link.svg'

const projectsData = [
    {
        id: 1,
        title: "To-do (Scheduler)",
        image: project1Png,
        link: "https://questlist.fly.dev",
        github: "https://github.com/hausenlot/quest",
        descriptionMobile: (
            <>
                A very generic CRUD Web-app. Made by using:
                <span className="highlight"> Rails 7</span>,
                <span className="highlight"> Tailwind</span>,
                <span className="highlight"> Flowbite Library</span>,
                <span className="highlight"> Stimulus(JS)</span> and
                <span className="highlight"> PostgreSQL</span>.
            </>
        ),
        descriptionDesktop: (
            <>
                First Rails 7 WebApp that I made from scratch alone. Made from
                <span className="highlight"> Rails 7</span>,
                <span className="highlight"> Tailwind</span>,
                <span className="highlight"> Flowbite Library</span>,
                <span className="highlight"> Stimulus(JS)</span> and
                <span className="highlight"> PostgreSQL</span>.
                Since I'm new to Rails 7 I said lets learn new things. Tailwind is really good for scaling the UI in different aspect ratios. Learned a lot 10/10
            </>
        )
    },
    {
        id: 2,
        title: "UI Repo (WIP)",
        titleMobile: "UI Repo",
        image: uiRepoPng,
        link: "https://hausenlot.github.io/UI-Repo/",
        github: "https://github.com/hausenlot/UI-Repo",
        descriptionMobile: (
            <>
                My Tailwind Component UI Repositories for front-end projects Made by using:
                <span className="highlight"> Javascript</span>,
                <span className="highlight"> JSON</span>,
                <span className="highlight"> HTML5</span> and
                <span className="highlight"> Tailwind</span>.
            </>
        ),
        descriptionDesktop: (
            <>
                My Tailwind Component UI Repositories for front-end projects Made from
                <span className="highlight"> Javascript</span>,
                <span className="highlight"> JSON</span>,
                <span className="highlight"> HTML5</span> and
                <span className="highlight"> Tailwind</span>.
                This is what my 2 brain cell thinks of to show my front-end skills and my creativity. I abused the fact that you can build a website dynamically using javasript and by feeding it data from a JSON I can pump out different Components without changing anything from the structure of the website.
            </>
        )
    },
    // Placeholders
    {
        id: 3,
        title: "Project 3 Placeholder",
        image: "https://placehold.co/600x400/222/eee?text=Project+3",
        link: "#",
        github: "#",
        descriptionMobile: "Coming soon...",
        descriptionDesktop: "This is a placeholder for a future project. It will be awesome."
    },
    {
        id: 4,
        title: "Project 4 Placeholder",
        image: "https://placehold.co/600x400/222/eee?text=Project+4",
        link: "#",
        github: "#",
        descriptionMobile: "Coming soon...",
        descriptionDesktop: "This is a placeholder for a future project. Stay tuned."
    },
    {
        id: 5,
        title: "Project 5 Placeholder",
        image: "https://placehold.co/600x400/222/eee?text=Project+5",
        link: "#",
        github: "#",
        descriptionMobile: "Coming soon...",
        descriptionDesktop: "This is a placeholder for a future project."
    },
    {
        id: 6,
        title: "Project 6 Placeholder",
        image: "https://placehold.co/600x400/222/eee?text=Project+6",
        link: "#",
        github: "#",
        descriptionMobile: "Coming soon...",
        descriptionDesktop: "This is a placeholder for a future project."
    }
];

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;

    const totalPages = Math.ceil(projectsData.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const currentItems = projectsData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="project-container relative">
            {currentItems.map((item, index) => {
                // Determine classes based on position (0 = top slot, 1 = bottom slot)
                const isFirst = index === 0;

                // Class mappings to preserve original exact layout
                // Slot 1: IMG=box-8, Desc=box-9, Link=box-10
                // Slot 2: IMG=box-11, Desc=box-12, Link=box-13

                const imgClass = isFirst ? "box box-8" : "box box-11";
                const descClass = isFirst ? "box box-9" : "box box-12";
                const linkClass = isFirst ? "box box-10 flex items-center justify-center" : "box box-13 flex items-center justify-center";

                return (
                    <React.Fragment key={item.id}>
                        {/* Project Image */}
                        <div className={imgClass}>
                            <img src={item.image} className="rounded-lg w-full h-full object-cover" alt={`${item.title} Thumbnail`} />
                        </div>

                        {/* Project Description */}
                        <div className={descClass}>
                            <div className="box-container p-2 md:hidden">
                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="font-extrabold text-base">
                                    {item.titleMobile || item.title}
                                </a>
                                <p className="text-xs text-secondaryText">
                                    {item.descriptionMobile}
                                </p>
                            </div>
                            <div className="box-container p-4 hidden md:block">
                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="font-extrabold text-2xl">
                                    {item.title}
                                </a>
                                <p className="text-sm text-secondaryText">
                                    {item.descriptionDesktop}
                                </p>
                            </div>
                        </div>

                        {/* Project Link */}
                        <div className={linkClass}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img src={linkSvg} alt="link icon" className="w-4 h-auto" />
                            </a>
                        </div>
                    </React.Fragment>
                );
            })}

            {/* Navigation Dots */}
            {totalPages > 1 && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-50">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === index
                                    ? "bg-accent scale-150"
                                    : "bg-surface hover:bg-tertiaryText"
                                }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
