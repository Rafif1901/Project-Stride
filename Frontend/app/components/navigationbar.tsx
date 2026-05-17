"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass = (href: string) => {
        const isActive = pathname === href;
        return `font-semibold uppercase tracking-widest transition-all duration-300 ${scrolled ? "text-sm" : "text-base"} ${isActive ? "text-stride-peach" : "text-white hover:text-stride-peach"}`;
    };

    return (
        <div className={`w-full flex justify-between items-center px-12 fixed top-0 z-50 bg-stride-primary border-b border-stride-muted transition-all duration-300 ${
            scrolled
                ? "py-4 shadow-lg shadow-black/15"
                : "py-8 shadow-none"
        }`}>

            <div className="flex items-center gap-3 cursor-pointer">
                <Image
                    src="/strideicon.png"
                    alt="Stride Logo"
                    width={scrolled ? 32 : 44}
                    height={scrolled ? 32 : 44}
                    className="transition-all duration-300"
                />
                <span className={`font-extrabold text-white tracking-wide italic transition-all duration-300 ${scrolled ? "text-2xl" : "text-4xl"}`}>
                    STR<span className="text-stride-peach">IDE</span>
                </span>
            </div>

            <div className="hidden md:flex items-center gap-10">
                <Link href="/" className={linkClass("/")}>
                    Home
                </Link>
                <Link href="/events" className={linkClass("/events")}>
                    Events
                </Link>
                <Link href="/products" className={linkClass("/products")}>
                    Products
                </Link>
            </div>

            <Link href="/login" className={`font-semibold uppercase tracking-widest border border-stride-peach text-stride-peach rounded-lg transition-all duration-300 hover:bg-stride-peach hover:text-stride-primary ${scrolled ? "text-sm px-3 py-1.5" : "text-base px-4 py-2"}`}>
                Login
            </Link>

        </div>
    );
}