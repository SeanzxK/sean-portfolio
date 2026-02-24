import { useState } from "react"
import { cn } from "../lib/util"

const skills = [
    {name: "HTML/CSS", level:95, category:"frontend"},
    {name: "JavaScript", level:90, category:"frontend"},
    {name: "Tailwind CSS", level:85, category:"frontend"},
    {name: "React", level:85, category:"frontend"},
    {name: "Node.js", level:80, category:"backend"},
    {name: "Express", level:80, category:"backend"},
    {name: "MongoDB", level:80, category:"database"},
    {name: "MySQL", level:85, category:"database"},
    {name: "PHPMyAdmin", level:80, category:"database"},
    {name: "Git/GitHub", level:85, category:"tools"},
    {name: "Docker", level:75, category:"tools"},
    {name: "VS Code", level:90, category:"tools"},
    {name: "Communication", level:90, category:"softskills"},
    {name: "Teamwork", level:85, category:"softskills"},
    {name: "Problem Solving", level:95, category:"softskills"},
    {name: "Project Management", level:90, category:"softskills"},
    {name: "Indonesian", level:100, category:"language"},
    {name: "English", level:85, category:"language"},
]

const category = ["all","frontend","backend","database","tools","softskills","language"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
                     <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                            <div className="animate-fade-in-delay-1 opacity-0">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow-2 pb-2">
                                My
                            </span>
                            </div>
                        
                            <div className="animate-fade-in-delay-2 opacity-0">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow pb-2">
                                Skills
                            </span>
                            </div>
                        </div>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {category.map((category,key)=>(
                        <button key={key}
                        onClick={()=>setActiveCategory(category)} 
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-foreground/60",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {filteredSkills.map((skill,key)=>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover border border-orange-500">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg text-foreground/60 ">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: `${skill.level}%`}}></div>
                            </div>
                            <div className="text-right mt-1 ">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}