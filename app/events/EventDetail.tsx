"use client";

import { useState, useEffect } from "react";
import { Event, formatRupiah } from "./types";

export default function EventDetail({
    event,
    onClose,
}: {
    event: Event;
    onClose: () => void;
}) {
    const [registered, setRegistered] = useState(false);
    const [visible, setVisible] = useState(false);

    // Trigger entrance animation after mount
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(t);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 250);
    };

    const handleRegister = () => {
        setRegistered(true);
        setTimeout(() => setRegistered(false), 2000);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-250 ${
                visible ? "bg-black/50 backdrop-blur-sm" : "bg-black/0 backdrop-blur-none"
            }`}
            onClick={handleClose}
        >
            <div
                className={`relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-250 ${
                    visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stride-base/5 hover:bg-stride-base/10 flex items-center justify-center text-stride-base transition"
                >
                    ✕
                </button>

                <div className="flex flex-col md:flex-row gap-0">
                    {/* Left: Image */}
                    <div className="md:w-2/5 bg-stride-surface/20 flex items-center justify-center min-h-48 md:min-h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                        {event.image ? (
                            <img src={event.image} alt={event.name} className="object-cover w-full h-full" />
                        ) : (
                            <span className="text-8xl">🏃</span>
                        )}
                    </div>

                    {/* Right: Info */}
                    <div className="md:w-3/5 p-6 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-stride-muted/10">
                        <span className="text-stride-peach text-xs font-bold uppercase tracking-widest">
                            {event.city}
                        </span>
                        <h2 className="text-stride-base text-2xl font-extrabold leading-snug">
                            {event.name}
                        </h2>

                        <div className="w-full h-px bg-stride-muted/10" />

                        <div className="flex flex-col gap-2 text-sm text-stride-base/70">
                            <div className="flex items-center gap-2">
                                <span>📅</span>
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>📍</span>
                                <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>🏃</span>
                                <span>{event.distance} km</span>
                            </div>
                        </div>

                        <div className="w-full h-px bg-stride-muted/10" />

                        <p className="text-stride-base/70 text-sm leading-relaxed">
                            {event.description}
                        </p>

                        <div className="w-full h-px bg-stride-muted/10" />

                        <p className="text-stride-primary text-3xl font-extrabold">
                            {formatRupiah(event.price)}
                        </p>

                        <button
                            onClick={handleRegister}
                            className="w-full py-3 bg-stride-primary hover:bg-stride-primaryDark text-white font-extrabold text-sm uppercase tracking-widest rounded-xl transition-colors duration-200"
                        >
                            {registered ? "✓ Registered!" : "Register Now"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}