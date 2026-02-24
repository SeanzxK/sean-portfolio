import { ArrowBigDownDash } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="text-xl md:text-2xl font-medium text-foreground/60 block mb-2 animate-fade-in">Hello, I'm</span>

                        <div className="flex justify-center items-center w-full mb-2 opacity-0 animate-fade-in-delay-1 pt-2">
                            <div className="relative group">
                                {/* Efek Cahaya di belakang foto */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
                                
                                {/* Bingkai & Foto */}
                                <img 
                                    src="/profil.png" // Ganti dengan path foto kamu
                                    alt="Sean Lucky Khosasih"
                                    className="relative w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 border-background shadow-2xl object-top"
                                />
                            </div>
                        </div>
                        
                        {/* Nama Utama: Menggunakan Flexbox agar spasi aman dan responsif */}
                        <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                            <div className="animate-fade-in-delay-1 opacity-0">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow-2 pb-2">
                                Sean
                            </span>
                            </div>
                            
                            {/* Lucky: Kita beri warna aksen Orange (sesuai transisi hover kamu tadi) */}
                            <div className="animate-fade-in-delay-2 opacity-0">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow pb-2">
                                Lucky
                            </span>
                            </div>
                            
                            {/* Khosasih: Kita beri warna aksen Ungu */}
                            <div className="animate-fade-in-delay-3 opacity-0 ">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow-2 pb-2">
                                Khosasih
                            </span>
                            </div>
                        </div>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        A Computer Science graduate from Binus University with a strong foundation in modern web development. I am driven by the challenge of creating scalable web applications that combine clean, efficient code with intuitive user interfaces. With a solid academic background and a passion for continuous learning, I am ready to deliver high-quality digital solutions that meet the demands of today’s tech landscape.
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-5">
                        <a href="#projects" className="cosmic-button inline-block px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(251,146,60,0.6)] active:scale-95">
                            Tap to View my Works!
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-muted-foreground/80 mb-2">Scroll Down</span> 
                <ArrowBigDownDash className="h-5 w-5 text-pr"/>
            </div>
        </section>
    )}