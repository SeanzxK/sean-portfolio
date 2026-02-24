import { Facebook, Instagram, Linkedin, Mail, MapIcon, MessageCircle, MessageCircleCheckIcon, MessageCircleIcon, MessageCircleQuestion, Phone } from "lucide-react"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_134lxcg', 'template_7hixyei', form.current, {
            publicKey: '2beh1Y029Lu1IOXc4',
        })
        .then(() => {
        form.current.reset();
        
        alert("Pesan berhasil dikirim!");
    });
};

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
                     <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                            <div className="animate-fade-in-delay-1 opacity-0">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow-2 pb-2">
                                Get
                            </span>
                            </div>
                        
                            <div className="animate-fade-in-delay-2 opacity-0">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow pb-2">
                                In
                            </span>
                            </div>

                            <div className="animate-fade-in-delay-1 opacity-0">
                            <span className="inline-block text-transparent bg-clip-text animate-custom-glow-2 pb-2">
                                Touch!
                            </span>
                            </div>
                        </div>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-foreground/60">
                        {""}
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-start">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/100">
                                <Mail className="h-6 w-6"/> {""}
                                </div>
                                <div className="flex flex-col items-start text-left">
                                    <h4 className="font-medium text-foreground/60">Email</h4>
                                    <a href="mailto:seanlkho23@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-xs">
                                        seanlkho23@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/100">
                                <Phone className="h-6 w-6"/> {""}
                                </div>
                                <div className="flex flex-col items-start text-left">
                                    <h4 className="font-medium text-foreground/60">Phone</h4>
                                    <a href="tel:+6282288697680" className="text-muted-foreground hover:text-primary transition-colors text-xs">
                                        +62 822-8869-7680
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/100 flex-shrink-0">
                                <MapIcon className="h-6 w-6"/> {""}
                                </div>
                                <div className="flex flex-col items-start text-left">
                                    <h4 className="font-medium text-foreground/60">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors text-xs justify-items-start">
                                        Jl. Rw. Belong No.68 9, RT.9/RW.15, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="text-xl font-semibold text-foreground/60">Connect with Me!</h4>
                            <div className="flex space-x-4 justify-center mt-4">
                                <a target="_blank" href="https://www.linkedin.com/in/sean-khosasih-313170252/" className="hover:text-primary transition-colors">
                                    <Linkedin/>
                                </a>
                                <a target="_blank" href="https://www.facebook.com/sean.khosasih" className="hover:text-primary transition-colors">
                                    <Facebook/>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/sean_lkho/" className="hover:text-primary transition-colors">
                                    <Instagram/>
                                </a>
                            </div>
                        </div>
                    </div>

                        <div className="bg-card p-8 rounded-lg shadow-xs border border-amber-800 border-1">
                            <h3 className="text-2xl font-semibold mb-6 text-foreground/60">
                                Send Me a Message
                            </h3>
                            <form action="" className="space-y-6" ref={form} onSubmit={sendEmail}>
                                <div className="flex flex-col">
                                    <label htmlFor="from_name" className="block mb-2 text-sm text-left">Name</label>
                                    <input type="text" id="from_name" name="from_name"
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                    placeholder="input your name here ..." />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="email" className="block mb-2 text-sm text-left">Email</label>
                                    <input type="email" id="email" name="email"
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                    placeholder="input your email here ..." />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="message" className="block mb-2 text-sm text-left">Message</label>
                                    <textarea id="message" name="message"
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                    placeholder="input your message here..." rows="4"></textarea>
                                </div>

                                <button type="submit"  value="Send" className="flex items-center justify-center w-1/2 mx-auto bg-primary text-white py-3 px-4 rounded-full hover:bg-orange-500 transition-colors">
                                    Send Message <MessageCircleQuestion size={20} className="ml-2"/>
                                </button>
                            </form>
                        </div>

                </div>
    </section>
}