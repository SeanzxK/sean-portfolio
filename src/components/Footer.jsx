import { ArrowBigUpDash } from "lucide-react"

export const Footer = () => {
    return <footer className="flex py-6 text-center bg-background/80 backdrop-blur-xl border-t border-foreground/10 text-center items-center justify-center gap-4">
        <p className="text-foreground/60">&copy; {new Date().getFullYear()} Sean Khosasih. All rights reserved.</p>
        <a href="#hero">
            <ArrowBigUpDash className="text-foreground/60 hover:text-primary transition-colors"/>
        </a>
    </footer>
}