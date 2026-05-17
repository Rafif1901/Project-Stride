"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Password dan Konfirmasi Password tidak cocok!");
            return;
        }

        setIsLoading(true);

        try {
            const nameParts = fullName.trim().split(" ");
            const first_name = nameParts[0] || "";
            const last_name = nameParts.slice(1).join(" ") || "-";
            const username = email.split("@")[0] || first_name.toLowerCase();
            const birth_date = "2000-01-01";
            const role = "user";

            const res = await fetch("http://localhost:5000/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    username,
                    email,
                    phone_number: phoneNumber,
                    password,
                    birth_date,
                    role
                }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                alert("Registrasi Berhasil! Silakan login dengan akun Anda.");
                router.push("/login");
            } else {
                setError(data.message || "Gagal melakukan registrasi. Cek kembali data Anda.");
            }
        } catch (err) {
            console.error("Register error:", err);
            setError("Gagal terhubung ke backend. Pastikan server Node.js Anda menyala.");
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <div className="flex min-h-screen">
            {/* Left: Image */}
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

            {/* Right: Form */}
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

                    <form onSubmit={handleRegister} className="flex flex-col gap-5">

                        {error && (
                            <div className="p-3 bg-red-100 border border-red-200 text-red-700 font-bold text-xs rounded-lg uppercase tracking-wider">
                                ⚠️ {error}
                            </div>
                        )}

                        <div className="flex flex-col gap-2">
                            <label className="text-stride-base text-xs font-bold uppercase tracking-widest">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Ahmad bin Abdullah"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
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
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white border border-stride-muted/40 text-stride-base text-sm placeholder:text-stride-base/30 focus:outline-none focus:border-stride-primary transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-stride-base text-xs font-bold uppercase tracking-widest">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="+62 812-3456-7890"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
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
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white border border-stride-muted/40 text-stride-base text-sm placeholder:text-stride-base/30 focus:outline-none focus:border-stride-primary transition-colors"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-stride-primary hover:bg-stride-primaryDark text-white font-extrabold text-sm uppercase tracking-widest rounded-lg transition-colors duration-200 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Creating Account..." : "Create Account"}
                        </button>
                    </form>

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