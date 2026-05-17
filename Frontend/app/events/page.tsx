"use client";

import { useState, useRef, useEffect } from "react";
import { DEFAULT_EVENTS, Event } from "./types";
import EventCard from "./EventCard";
import EventDetail from "./EventDetail";

const CITIES = ["All", "Jakarta", "Bandung", "Bogor"];
const SORT_OPTIONS = [
    { label: "Shortest to Furthest", value: "asc" },
    { label: "Furthest to Shortest", value: "desc" },
];

function Dropdown({
    label,
    options,
    value,
    onChange,
}: {
    label: string;
    options: { label: string; value: string }[];
    value: string;
    onChange: (val: string) => void;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const selected = options.find((o) => o.value === value);

    return (
        <div className="flex items-center gap-3">
            <span className="text-stride-base/60 text-sm font-semibold">{label}</span>
            <div ref={ref} className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className={`flex items-center gap-3 bg-white border text-stride-base text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 min-w-48 justify-between ${
                        open ? "border-stride-primary shadow-sm" : "border-stride-muted/20 hover:border-stride-muted/50"
                    }`}
                >
                    <span>{selected?.label}</span>
                    <svg
                        className={`w-4 h-4 text-stride-base/40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Dropdown */}
                {open && (
                    <div className="absolute top-full left-0 mt-2 w-full bg-white border border-stride-muted/20 rounded-lg shadow-lg overflow-hidden z-20">
                        {options.map((opt) => (
                            <button
                                key={opt.value}
                                onClick={() => {
                                    onChange(opt.value);
                                    setOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                                    value === opt.value
                                        ? "bg-stride-primary text-white font-bold"
                                        : "text-stride-base hover:bg-stride-bg font-medium"
                                }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function EventsPage() {
    const [selected, setSelected] = useState<Event | null>(null);
    const [cityFilter, setCityFilter] = useState("All");
    const [sort, setSort] = useState<"asc" | "desc">("asc");

    const cityOptions = CITIES.map((c) => ({ label: c === "All" ? "All Locations" : c, value: c }));

    const filtered = DEFAULT_EVENTS
        .filter((e) => cityFilter === "All" || e.city === cityFilter)
        .sort((a, b) => sort === "asc" ? a.distance - b.distance : b.distance - a.distance);

    return (
        <main className="min-h-screen bg-stride-bg pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col gap-2 mb-10">
                    <p className="text-stride-peach text-xs font-bold uppercase tracking-widest">
                        Stride Events
                    </p>
                    <h1 className="text-stride-base text-4xl md:text-5xl font-extrabold">
                        Upcoming Events
                    </h1>
                    <p className="text-stride-base/60 text-sm mt-1">
                        Find and register for runs near you.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-10 items-start sm:items-center">
                    <Dropdown
                        label="Sort By"
                        options={SORT_OPTIONS}
                        value={sort}
                        onChange={(val) => setSort(val as "asc" | "desc")}
                    />
                    <Dropdown
                        label="Show"
                        options={cityOptions}
                        value={cityFilter}
                        onChange={setCityFilter}
                    />
                </div>

                {filtered.length === 0 ? (
                    <div className="text-center py-24 text-stride-base/30 text-lg">
                        No events found.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filtered.map((event) => (
                            <EventCard
                                key={event.id}
                                event={event}
                                onClick={() => setSelected(event)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {selected && (
                <EventDetail event={selected} onClose={() => setSelected(null)} />
            )}
        </main>
    );
}