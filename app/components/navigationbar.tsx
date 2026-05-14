"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-full flex justify-between items-center px-12 fixed top-0 z-50 bg-stride-primary border-b border-stride-muted transition-all duration-300 ${
            scrolled
                ? "py-4 shadow-lg shadow-black/15"
                : "py-8 shadow-none"
        }`}>

            <div className="flex items-center gap-2 cursor-pointer">
                <span className={`font-extrabold text-white tracking-wide italic transition-all duration-300 ${scrolled ? "text-2xl" : "text-4xl"}`}>
                    STR<span className="text-stride-peach">IDE</span>
                </span>
            </div>

            <div className="hidden md:flex items-center gap-10">
                <Link href="/" className={`font-semibold text-white uppercase tracking-widest hover:text-stride-peach transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`}>
                    Home
                </Link>
                <Link href="/events" className={`font-semibold text-stride-peach uppercase tracking-widest transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`}>
                    Events
                </Link>
                <Link href="/products" className={`font-semibold text-white uppercase tracking-widest hover:text-stride-peach transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`}>
                    Products
                </Link>
                <Link href="/contact" className={`font-semibold text-white uppercase tracking-widest hover:text-stride-peach transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`}>
                    Contact
                </Link>
            </div>

            <div className="flex items-center gap-2 cursor-pointer group">
                <svg xmlns="http://www.w3.org/2000/svg" className={`text-zinc-400 group-hover:text-stride-peach transition-all duration-300 ${scrolled ? "w-5 h-5" : "w-6 h-6"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1 1 18.88 17.804M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
                <button className={`font-semibold text-white uppercase tracking-widest group-hover:text-stride-peach transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`}>
                    Login
                </button>
            </div>

        </div>
    );
}