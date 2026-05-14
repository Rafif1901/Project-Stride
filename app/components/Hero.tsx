"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const events = [
    {
        id: 1,
        name: "Kuala Lumpur City Run 2026",
        date: "12 July 2026",
        time: "5:30 AM",
        location: "Dataran Merdeka, KL",
    },
    {
        id: 2,
        name: "Penang Bridge Marathon",
        date: "3 August 2026",
        time: "4:00 AM",
        location: "Penang Bridge, Penang",
    },
    {
        id: 3,
        name: "Putrajaya Night Run",
        date: "20 September 2026",
        time: "8:00 PM",
        location: "Presinct 2, Putrajaya",
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(true);

    const changeTo = (index: number) => {
        setVisible(false);
        setTimeout(() => {
            setCurrent(index);
            setVisible(true);
        }, 300);
    };

    const prev = () => changeTo(current === 0 ? events.length - 1 : current - 1);
    const next = () => changeTo(current === events.length - 1 ? 0 : current + 1);

    return (
        <section className="relative w-full h-screen flex items-center overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/finpro1.jpg')" }}
            />

            <div className="absolute inset-0 bg-stride-muted opacity-90" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center gap-16">

                <div className="flex-1 flex flex-col gap-4">
                    <p className="text-stride-peach text-sm font-semibold uppercase tracking-widest">
                        Running Redefined
                    </p>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                        Run Together.<br />Go Further.
                    </h1>
                    <p className="text-white/70 text-base max-w-sm leading-relaxed">
                        Discover local run events, connect with fellow runners, and track your journey with Stride.
                    </p>
                    <Link
                        href="/events"
                        className="mt-4 self-start px-8 py-3 bg-white text-stride-primary font-extrabold text-sm uppercase tracking-widest hover:bg-stride-peach hover:text-white transition-colors duration-200"
                    >
                        Browse Events
                    </Link>
                </div>

                <div className="flex-1 flex flex-col gap-4 w-full max-w-md">
                    <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">
                        Upcoming Events
                    </p>

                    <div
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col gap-3 transition-opacity duration-300"
                        style={{ opacity: visible ? 1 : 0 }}
                    >
                        <span className="text-stride-peach text-xs font-bold uppercase tracking-widest">
                            {events[current].date} · {events[current].time}
                        </span>
                        <h2 className="text-white text-2xl font-extrabold leading-snug">
                            {events[current].name}
                        </h2>
                        <p className="text-white/60 text-sm">
                            📍 {events[current].location}
                        </p>
                        <Link
                            href="/register"
                            className="mt-2 self-start px-6 py-2 bg-stride-primary hover:bg-stride-primaryDark text-white text-sm font-bold uppercase tracking-widest rounded-md transition-colors duration-200"
                        >
                            Register
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 mt-1">
                        <button onClick={prev} className="w-9 h-9 rounded-full border border-white/30 text-white hover:bg-white/20 transition flex items-center justify-center text-sm">
                            ‹
                        </button>
                        <div className="flex gap-2">
                            {events.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => changeTo(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-stride-peach w-5" : "bg-white/30 w-2"}`}
                                />
                            ))}
                        </div>
                        <button onClick={next} className="w-9 h-9 rounded-full border border-white/30 text-white hover:bg-white/20 transition flex items-center justify-center text-sm">
                            ›
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}