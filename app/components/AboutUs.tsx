export default function AboutUs() {
    return (
        <section className="w-full bg-stride-bg py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                <div className="flex flex-col gap-4">
                    <h3 className="text-stride-base font-extrabold text-lg uppercase tracking-wide">
                        What We <span className="text-stride-primary">Do.</span>
                    </h3>
                    <div className="w-full h-px bg-stride-primary" />
                    <p className="text-stride-base/70 text-sm leading-relaxed mt-2">
                        We help runners find and register for the best running events across Indonesia — all in one place. From city runs and marathons to trail races and charity runs, Stride brings the running community together so no one misses a race.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-stride-base font-extrabold text-lg uppercase tracking-wide">
                        Our <span className="text-stride-primary">Vision.</span>
                    </h3>
                    <div className="w-full h-px bg-stride-primary" />
                    <p className="text-stride-base/70 text-sm leading-relaxed mt-2">
                        We are building a platform that unites runners of all levels under one community. Our vision is to make running more accessible, social, and rewarding — empowering over a million runners to lead healthier, more connected lives across Southeast Asia.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-stride-base font-extrabold text-lg uppercase tracking-wide">
                        Our <span className="text-stride-primary">Community.</span>
                    </h3>
                    <div className="w-full h-px bg-stride-primary" />
                    <p className="text-stride-base/70 text-sm leading-relaxed mt-2">
                        Stride is built by runners, for runners. We believe running is more than just a sport — it's a lifestyle that brings people together. Whether you're chasing a personal best or running your first 5K, you belong here. Every stride counts.
                    </p>
                </div>

            </div>
        </section>
    );
}