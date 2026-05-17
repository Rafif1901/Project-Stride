import { Event, formatRupiah } from "./types";

export default function EventCard({
    event,
    onClick,
}: {
    event: Event;
    onClick: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-white hover:shadow-lg border border-stride-muted/10 hover:border-stride-peach/50 rounded-2xl overflow-hidden transition-all duration-300"
        >
            {/* Image / Placeholder */}
            <div className="aspect-video bg-stride-surface/20 flex items-center justify-center overflow-hidden relative">
                {event.image ? (
                    <img src={event.image} alt={event.name} className="object-cover w-full h-full" />
                ) : (
                    <span className="text-5xl">🏃</span>
                )}
                {/* Distance badge */}
                <span className="absolute top-3 right-3 bg-stride-primary text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                    {event.distance}K
                </span>
            </div>

            <div className="p-4 flex flex-col gap-2">
                <span className="text-stride-peach text-xs font-bold uppercase tracking-widest">
                    {event.city}
                </span>
                <h3 className="text-stride-base font-bold text-sm leading-snug line-clamp-2">
                    {event.name}
                </h3>
                <div className="flex items-center gap-1 text-stride-base/50 text-xs">
                    <span>📅</span>
                    <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1 text-stride-base/50 text-xs">
                    <span>📍</span>
                    <span>{event.location}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                    <p className="text-stride-base font-extrabold text-lg">
                        {formatRupiah(event.price)}
                    </p>
                    <span className="text-stride-base/40 text-xs">{event.distance} km</span>
                </div>
                <button className="mt-2 w-full py-2 border border-stride-primary text-stride-primary text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-stride-primary hover:text-white transition-colors duration-200">
                    Event Details
                </button>
            </div>
        </div>
    );
}