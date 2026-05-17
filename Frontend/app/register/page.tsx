import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen">
            <div className="hidden md:flex w-2/5 relative">
                <Image
                    src="/finpro1.jpg"
                    alt="Runners"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-stride-primary opacity-60" />
                <div className="absolute inset-y-0 right-0 w-72 bg-gradient-to-r from-transparent to-stride-bg" />
                <div className="absolute top-10 left-10 flex items-center gap-3">
                    <Image src="/strideicon.png" alt="Stride Logo" width={40} height={40} />
                    <span className="text-3xl font-extrabold text-white italic tracking-wide">
                        STR<span className="text-stride-peach">IDE</span>
                    </span>
                </div>
                <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-white/80 text-2xl font-extrabold leading-snug">
                        Run Together.<br />Go Further.
                    </p>
                    <p className="text-white/50 text-sm mt-2">
                        Join thousands of runners across Indonesia.
                    </p>
                </div>
            </div>

            <div className="w-full md:w-3/5 bg-stride-bg flex items-center justify-center px-8 py-16 pt-32">
                <div className="w-full max-w-md flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-stride-base text-3xl font-extrabold tracking-tight">
                            Create an account.
                        </h1>
                        <p className="text-stride-base/50 text-sm">
                            Join the Stride community and start running today.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-stride-base text-xs font-bold uppercase tracking-widest">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Ahmad bin Abdullah"
                                className="w-full px-4 py-3 rounded-lg bg-white border border-stride-muted/40 text-stride-base text-sm placeholder:text-stride-base/30 focus:outline-none focus:border-stride-primary transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-stride-base text-xs font-bold uppercase tracking-widest">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg bg-white border border-stride-muted/40 text-stride-base text-sm placeholder:text-stride-base/30 focus:outline-none focus:border-stride-primary transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-stride-base text-xs font-bold uppercase tracking-widest">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="+60 12-345 6789"
                                className="w-full px-4 py-3 rounded-lg bg-white border border-stride-muted/40 text-stride-base text-sm placeholder:text-stride-base/30 focus:outline-none focus:border-stride-primary transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-stride-base text-xs font-bold uppercase tracking-widest">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg bg-white border border-stride-muted/40 text-stride-base text-sm placeholder:text-stride-base/30 focus:outline-none focus:border-stride-primary transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-stride-base text-xs font-bold uppercase tracking-widest">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg bg-white border border-stride-muted/40 text-stride-base text-sm placeholder:text-stride-base/30 focus:outline-none focus:border-stride-primary transition-colors"
                            />
                        </div>

                        <button className="w-full py-3 bg-stride-primary hover:bg-stride-primaryDark text-white font-extrabold text-sm uppercase tracking-widest rounded-lg transition-colors duration-200 mt-2">
                            Create Account
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-stride-muted/30" />
                        <span className="text-stride-base/30 text-xs uppercase tracking-widest">or</span>
                        <div className="flex-1 h-px bg-stride-muted/30" />
                    </div>

                    <p className="text-center text-stride-base/50 text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="text-stride-primary font-bold hover:text-stride-primaryDark transition-colors">
                            Log in here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}