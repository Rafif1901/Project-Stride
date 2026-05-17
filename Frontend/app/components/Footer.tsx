import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="w-full bg-stride-surface border-t border-stride-muted">
            <div className="max-w-7xl mx-auto px-12 py-16 flex flex-col md:flex-row justify-between gap-12">

                {/* Logo + Tagline */}
                <div className="flex flex-col gap-4 max-w-xs">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-extrabold text-white italic tracking-wide">
                            STR<span className="text-stride-peach">IDE</span>
                        </span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">
                        Your running community. Discover events, connect with runners, and go further together.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-extrabold uppercase tracking-widest text-sm">
                        Contact Us
                    </h4>
                    <div className="w-12 h-px bg-stride-primary" />
                    <ul className="flex flex-col gap-3 text-white/60 text-sm">
                        <li className="flex items-center gap-3">
                            {/* Phone */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-stride-peach shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.23 1.05L7.5 9.5a16 16 0 006.99 7l1.47-1.6a1 1 0 011.05-.23l3.3 1.1a1 1 0 01.68.95V19a2 2 0 01-2 2C9.16 21 3 14.84 3 7V5z" />
                            </svg>
                            +60 12-345 6789
                        </li>
                        <li className="flex items-center gap-3">
                            {/* Email */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-stride-peach shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            hello@stride.my
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-extrabold uppercase tracking-widest text-sm">
                        Follow Us
                    </h4>
                    <div className="w-12 h-px bg-stride-primary" />
                    <ul className="flex flex-col gap-3 text-sm">
                        <li>
                            <Link href="https://instagram.com" target="_blank" className="flex items-center gap-3 text-white/60 hover:text-stride-peach transition-colors">
                                {/* Instagram */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                                </svg>
                                @striderun.my
                            </Link>
                        </li>
                        <li>
                            <Link href="https://youtube.com" target="_blank" className="flex items-center gap-3 text-white/60 hover:text-stride-peach transition-colors">
                                {/* YouTube */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29.94 29.94 0 001 12a29.94 29.94 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29.94 29.94 0 0023 12a29.94 29.94 0 00-.46-5.58z" />
                                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Stride Run
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com" target="_blank" className="flex items-center gap-3 text-white/60 hover:text-stride-peach transition-colors">
                                {/* Twitter */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                                @striderun
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-stride-muted py-6 px-12 flex flex-col md:flex-row items-center justify-between gap-2">
                <p className="text-white/30 text-xs">
                    © {new Date().getFullYear()} Stride. All rights reserved.
                </p>
                <p className="text-white/30 text-xs">
                    Built with ❤️ by the Stride Team
                </p>
            </div>
        </footer>
    );
}