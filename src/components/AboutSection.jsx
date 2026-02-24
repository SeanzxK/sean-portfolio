import { AccessibilityIcon, BriefcaseBusiness, Code2, LucideAccessibility, User, UserCheck } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
                     <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                            <div className="animate-fade-in-delay-1 opacity-0">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow-2 pb-2">
                                About
                            </span>
                            </div>
                        
                            <div className="animate-fade-in-delay-2 opacity-0">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow pb-2">
                                Me
                            </span>
                            </div>
                        </div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 ">
                        <h3 className="text-2xl font-semibold text-foreground/60 block mb-2">
                        Full-Stack Web Developer & Binus University Graduate
                        </h3>

                        <p className="text-muted-foreground">   
                            As a Full-Stack Developer and Binus University graduate, I am industry-ready with a 
                            portfolio of scalable web projects. I am deeply passionate about leveraging technology 
                            to streamline workflows and solve real-world challenges. Beyond writing clean code, I bring 
                            strong problem-solving and decision-making capabilities to every team, ensuring that every 
                            digital solution is not only functional but also strategically designed to help people work 
                            more efficiently.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button inline-block px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(251,146,60,0.6)] active:scale-95">
                                Get In Touch with Me!
                            </a>
                            <a 
                            href="/CV_Sean_Lucky_Khosasih.pdf"  
                            download="CV_Sean_Lucky_Khosasih.pdf"
                            className="px-6 py-2 rounded full border border-primary inline-block px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(251,146,60,0.6)] active:scale-95">
                                Download My CV Here!
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-5 md:p-6 card-hover border-primary/100">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                                <div className="p-3 rounded-full bg-orange-800">
                                <Code2 className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-foreground/60">Web Development</h4>
                                    <p className="text-muted-foreground text-sm">Building responsive and scalable web applications using modern frameworks and best practices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover border-orange-500">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                                <div className="p-3 rounded-full bg-primary">
                                <UserCheck className="h-6 w-6 text-orange-800"/>
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg text-foreground/60">Soft skills</h4>
                                    <p className="text-muted-foreground text-sm">Strong communication, teamwork, and problem-solving abilities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover border-primary/100">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                                <div className="p-3 rounded-full bg-orange-800">
                                <BriefcaseBusiness className="h-6 w-6 text-primary"/>
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg text-foreground/60">Project Management</h4>
                                    <p className="text-muted-foreground text-sm">Experience managing projects from conception to completion and ensuring timely delivery of outcomes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
