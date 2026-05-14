const sponsors = Array(10).fill(null);

export default function SponsorsCarousel() {
    return (
        <section className="w-full bg-stride-bg py-20 px-6">
            <div className="max-w-7xl mx-auto">

                <h2 className="font-extrabold text-stride-base text-lg md:text-xl uppercase text-center tracking-widest">
                    Proudly Supported By
                </h2>

                <div className="relative mt-16 overflow-hidden">

                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stride-bg to-transparent z-10 pointer-events-none" />

                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stride-bg to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-scroll">

                        <div className="flex items-center gap-16 shrink-0 px-8">
                            {sponsors.map((_, index) => (
                                <div
                                    key={`a-${index}`}
                                    className="w-24 h-24 bg-stride-muted/30 border border-stride-muted/20 rounded-lg shrink-0"
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-16 shrink-0 px-8">
                            {sponsors.map((_, index) => (
                                <div
                                    key={`b-${index}`}
                                    className="w-24 h-24 bg-stride-muted/30 border border-stride-muted/20 rounded-lg shrink-0"
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}