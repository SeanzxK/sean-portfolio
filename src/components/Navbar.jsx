import { cn } from "../lib/util";
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <>
    <nav className={cn("fixed w-full z-40 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/30 backdrop-blur-md shadow-xs" : "py-5"
    )}>

        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center gap-2" href="#hero">
                <img 
                    src="/logo.png" 
                    alt="Logo"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-white/20 transition-transform duration-300 group-hover:scale-110" 
                />
                <span className="relative z-10">
                    <span className="text-glow animate-glow-pulse">Sean</span> 
                    <span className="text-glow-purple animate-glow-pulse">Portfolio</span>
                </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item,key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:animate-glow-transition transition-all duration-300">{item.name}</a>
                )
                )}
            </div>

            {/* Mobile Navigation */}
           {/* Tombol Hamburger/Close */}
            <button 
                onClick={() => setIsMenuOpen((prev) => !prev)} 
                // Z-index dinaikkan (z-[120]) agar tombol X tetap terlihat & bisa diklik meski overlay terbuka
                className="md:hidden p-2 z-[120] text-foreground/80 relative" 
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                    "fixed inset-0 w-full h-screen bg-background/40 backdrop-blur-xl z-[110] flex flex-col items-center justify-center md:hidden transition-all duration-500",
                    isMenuOpen 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 -translate-y-full pointer-events-none"
                )}
                style={{ 
                    WebkitBackdropFilter: "blur(16px)", 
                    // TAMBAHKAN INI: Memaksa akselerasi hardware secara agresif
                    transform: isMenuOpen ? "translateZ(0) translateY(0)" : "translateZ(0) translateY(-100%)",
                    backfaceVisibility: "hidden"
                }}
                >
                {/* Container Navlink */}
                {/* Menggunakan z-[130] agar teks link berada di lapisan paling depan dalam overlay */}
                <div className="relative z-[130] flex flex-col space-y-8 text-xl text-center">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className="text-foreground/80 hover:animate-glow-transition transition-all duration-300 block"
                            onClick={() => setIsMenuOpen(false)} // Menutup menu setelah link diklik
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

        </div>
    </nav>
    </>
}