import React, { useState, useEffect } from 'react';
import project1Png from '/assets/project_1.png'
import uiRepoPng from '/assets/ui_repo.png'
import ffaFileManagerPng from '/assets/ffa_file_manager.png'
import budgetScribePng from '/assets/budget_scribe.png'
import linkSvg from '/assets/link.svg'
import githubSvg from '/assets/github.svg'

const projectsData = [
    {
        id: 1,
        title: "FFA File Manager",
        image: ffaFileManagerPng,
        link: "https://file.polobutporo.xyz/",
        github: "https://github.com/hausenlot/file-manager",
        tech: ["MongoDB", "Express", "React", "Node", "MinioS3", "RabbitMQ", "Docker", "Nginx", "CloudFlare"],
        checkUrl: "https://file.polobutporo.xyz/",
        descriptionMobile: "It's free for all. Upload, Download, Delete. Everything goes.",
        descriptionDesktop: "This is FullStack. Self Hosted in my own server. It uses MinioS3 for storage and RabbitMQ for message queueing. I'm using Nginx as a reverse proxy and CloudFlare for DNS."
    },
    {
        id: 2,
        title: "Budget Scribe",
        image: budgetScribePng,
        link: "https://stt.polobutporo.xyz/",
        github: "https://github.com/hausenlot/STT-server",
        tech: ["Python", "FastAPI", "faster-whisper", "Docker", "Nginx", "CloudFlare"],
        checkUrl: "https://stt.polobutporo.xyz/",
        descriptionMobile: "So what did the audio said? Yes, I will tell you.",
        descriptionDesktop: "So what did the audio said? Yes, I will tell you. Drag and drop the file, pick output and there you go. Free STT service. Just make sure you speak english."
    },
    {
        id: 3,
        title: "To-do (Scheduler)",
        image: project1Png,
        link: "https://questlist.fly.dev",
        github: "https://github.com/hausenlot/quest",
        tech: ["Rails 7", "Tailwind", "Flowbite", "Stimulus", "PostgreSQL"],
        descriptionMobile: "Todo List baby! Everyone likes it for some reason",
        descriptionDesktop: "This is a placeholder for a future project. It will be awesome."
    },
    {
        id: 4,
        title: "UI Repo (WIP)",
        titleMobile: "UI Repo",
        image: uiRepoPng,
        link: "https://hausenlot.github.io/UI-Repo/",
        github: "https://github.com/hausenlot/UI-Repo",
        tech: ["JavaScript", "JSON", "HTML5", "Tailwind"],
        descriptionMobile: "I am never gonna finish this, I ain't good at designing.",
        descriptionDesktop: "I am never gonna finish this, I ain't good at designing. But the Idea is instead of Asking AI for components you grab it here and paste it on your project. But well AI is too good at those and a True front end developer doesnt need this thing."
    },
    // Placeholders
    {
        id: 5,
        title: "Revoicer",
        image: "https://placehold.co/600x400/222/eee?text=Revoicer",
        link: "#",
        github: "#",
        tech: [],
        descriptionMobile: "Coming soon...",
        descriptionDesktop: "Still in development. Currently Status: Architecture Design"
    },
    {
        id: 6,
        title: "File Converter",
        image: "https://placehold.co/600x400/222/eee?text=File+Converter",
        link: "#",
        github: "#",
        tech: [],
        descriptionMobile: "Coming soon...",
        descriptionDesktop: "Still in development. Currently Status: Research"
    }
];

const MobileProjectCard = ({ item, status }) => {
    const containerRef = React.useRef(null);
    const [showDescription, setShowDescription] = useState(true);

    React.useLayoutEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current) {
                // Reset to visible to re-measure (in case of resize)
                setShowDescription(true);
                // We need to wait for render with description visible, then measure
                // However, doing state update in layout effect might cause loop if not careful.
                // Better approach: Check if it IS overflowing currently.
                // If we assume it starts true, and we detect overflow, we set false.
                // If we resize and it fits? Hard to know without re-adding it.
                // For now, let's stick to "if it overflows, hide it".

                // Note: layout effect runs after DOM update.
                if (containerRef.current.scrollHeight > containerRef.current.clientHeight) {
                    setShowDescription(false);
                }
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, []);

    // If we hid it, we might want to check if we can show it again on resize? 
    // It's tricky because once hidden, scrollHeight decreases.
    // A more robust way is to measure with description, but that requires double render or hidden clone.
    // Given the requirement "if it overflow, just dont display", one-way latch (hide) is probably fine for initial load/render.
    // But if we want to be safe, we can just say: logic is primarily for initial render or strict fit.

    return (
        <div ref={containerRef} className="box-container p-2 md:hidden flex flex-col h-full overflow-hidden">
            <div className="flex items-center justify-between mb-1 shrink-0">
                <div className="flex items-center gap-2 overflow-hidden">
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className="font-extrabold text-base truncate">
                        {item.titleMobile || item.title}
                    </a>
                    {status && (
                        <span className={`text-[0.6rem] px-1.5 py-0.5 rounded font-bold border whitespace-nowrap ${status === "Online" ? "bg-green-500/20 text-green-500 border-green-500/30" : "bg-red-500/20 text-red-500 border-red-500/30"}`}>
                            {status}
                        </span>
                    )}
                </div>
                <div className="flex gap-2 shrink-0">
                    {item.github && item.github !== "#" && (
                        <a href={item.github} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100">
                            <img src={githubSvg} alt="GitHub" className="w-4 h-4" />
                        </a>
                    )}
                    {item.link && item.link !== "#" && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100">
                            <img src={linkSvg} alt="Live" className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

            {showDescription && (
                <p className="text-xs text-secondaryText flex-grow overflow-hidden">
                    {item.descriptionMobile}
                </p>
            )}

            {item.tech && item.tech.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2 shrink-0">
                    {item.tech.map((t, i) => (
                        <span key={i} className="text-[10px] bg-background px-1.5 py-0.5 rounded text-primaryText">{t}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [statuses, setStatuses] = useState({});
    const itemsPerPage = 2;

    const totalPages = Math.ceil(projectsData.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const currentItems = projectsData.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        const checkStatuses = async () => {
            const newStatuses = {};

            const checkProjectStatus = (url) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => resolve("Online");
                    img.onerror = () => resolve("Offline");
                    // Append vite.svg and a timestamp to bypass cache
                    img.src = `${url}vite.svg?t=${new Date().getTime()}`;
                });
            };

            const promises = projectsData.map(async (project) => {
                if (project.checkUrl) {
                    const status = await checkProjectStatus(project.checkUrl);
                    newStatuses[project.id] = status;
                }
            });

            await Promise.all(promises);
            setStatuses(newStatuses);
        };

        checkStatuses();

        // Optional: Polling every 30 seconds
        const interval = setInterval(checkStatuses, 30000);
        return () => clearInterval(interval);
    }, []);

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

                const status = statuses[item.id];

                return (
                    <React.Fragment key={item.id}>
                        {/* Project Image */}
                        <div className={imgClass}>
                            <img src={item.image} className="rounded-lg w-full h-full object-cover" alt={`${item.title} Thumbnail`} />
                        </div>

                        {/* Project Description - now includes links and tech badges */}
                        <div className={descClass}>

                            {/* Mobile View */}
                            <MobileProjectCard item={item} status={status} />

                            {/* Desktop View */}
                            <div className="box-container p-3 hidden md:flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <a href={item.github} target="_blank" rel="noopener noreferrer" className="font-extrabold text-2xl hover:text-accent transition-colors">
                                                {item.title}
                                            </a>
                                            {status && (
                                                <span className={`text-xs px-2 py-1 rounded font-bold border ${status === "Online" ? "bg-green-500/20 text-green-500 border-green-500/30" : "bg-red-500/20 text-red-500 border-red-500/30"}`}>
                                                    {status}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex gap-3">
                                            {item.github && item.github !== "#" && (
                                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                                                    <img src={githubSvg} alt="GitHub" className="w-5 h-5" />
                                                </a>
                                            )}
                                            {item.link && item.link !== "#" && (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                                                    <img src={linkSvg} alt="Live Demo" className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-secondaryText leading-tight">
                                        {item.descriptionDesktop}
                                    </p>
                                </div>
                                {item.tech && item.tech.length > 0 && (
                                    <div className="flex flex-wrap gap-2 pt-3 border-t border-surface/50 mt-auto">
                                        {item.tech.map((t, i) => (
                                            <span key={i} className="text-xs bg-background/50 px-2 py-1 rounded text-primaryText border border-surface/30">{t}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
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
