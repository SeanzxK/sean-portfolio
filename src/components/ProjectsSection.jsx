import { Description } from "@radix-ui/react-toast"
import { ArrowRight, Github, GithubIcon, Video } from "lucide-react"

const projects = [
    {
        id:1,
        title: "Chill Movie",
        Description: "A movie recommendation app built with React and Tailwind CSS, featuring a sleek UI and personalized recommendations.",
        image: "/projects/project-1.png",
        tags: ["React", "Tailwind CSS", "API", "JavaScript", "UI/UX"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id:2,
        title: "Coffee Shop Website",
        Description: "A responsive coffee shop website built with React and Tailwind CSS, featuring an elegant design and intuitive navigation.",
        image: "/projects/project-2.png",
        tags: ["HTML/CSS", "JavaScript", "UI/UX", "Landing Page"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id:3,
        title: "Sean Coffee Shop",
        Description: "A modern coffee shop website built with React and Tailwind CSS, featuring a clean design and seamless user experience.",
        image: "/projects/project-3.png",
        tags: ["HTML/CSS", "JavaScript", "UI/UX", "Landing Page"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-24 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
                     <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                            <div className="animate-fade-in-delay-1 opacity-0">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow-2 pb-2">
                                Featured
                            </span>
                            </div>
                        
                            <div className="animate-fade-in-delay-2 opacity-0">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow pb-2">
                                Projects
                            </span>
                            </div>
                    </div>
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Explore a selection of my featured projects, showcasing my skills in web development and design. Each project highlights my ability to create responsive, user-friendly applications that solve real-world problems and deliver exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projects.map((project,key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-amber-800 border-3">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs border border-primary font-medium rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-4 text-foreground/80 px-6">
                            {project.title}
                        </h3>

                        <p className="px-6 text-muted-foreground mb-4">
                            {project.Description}
                        </p>

                        <div className="flex justify-center items-center mb-4">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} target="_blank" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-orange-500 transition-colors">
                                    <Video className="inline mr-1"/> Live Demo
                                </a>
                                <a href={project.githubUrl} target="_blank" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-orange-500 transition-colors">
                                    <Github className="inline mr-1"/> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/SeanzxK" target="_blank" className="inline-flex items-center gap-1 cosmic-button text-muted-foreground px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(251,146,60,0.6)] active:scale-95">
                    Check My Github <GithubIcon size={16}/> <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}