import Image from "next/image";

const sponsors = [
    { src: "/logo-ime-black.png", alt: "IME Logo" },
    { src: "/netlab_logo.svg", alt: "Netlab Logo" },
    { src: "/strava.svg", alt: "Strava Logo" },
    { src: "/on-logo.png", alt: "ON Logo" },
    { src: "/heng.jpg", alt: "heng" },
    { src: "/ratgar.jpg", alt: "Ratgar" },
    { src: "/ingy.jpg", alt: "INgy" },
    { src: "/mbip.jpg", alt: "mbip" }
];

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

                        <div className="flex items-center gap-8 shrink-0 px-10">
                            {sponsors.map((sponsor, index) => (
                                <div key={`a-${index}`} className="w-40 h-24 relative shrink-0">
                                    <Image
                                        src={sponsor.src}
                                        alt={sponsor.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-8 shrink-0 px-10">
                            {sponsors.map((sponsor, index) => (
                                <div key={`b-${index}`} className="w-40 h-24 relative shrink-0">
                                    <Image
                                        src={sponsor.src}
                                        alt={sponsor.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}