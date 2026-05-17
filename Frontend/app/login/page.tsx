"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await fetch("http://localhost:5000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                const token = data.payload?.token;
                const role = data.payload?.user?.role || "user";

                if (token) {
                    localStorage.setItem("token", token);

                    if (role === "admin") {
                        alert("Login Berhasil! Selamat datang Admin Stride.");
                        router.push("/admin");
                    } else {
                        alert("Login Berhasil! Selamat datang di Stride Official Store.");
                        router.push("/products");
                    }
                } else {
                    setError("Login sukses, tetapi token gagal diverifikasi oleh sistem.");
                }
            } else {
                setError(data.message || "Email atau password salah. Silakan cek database kamu.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Gagal terhubung ke server backend. Pastikan server Node.js menyala.");
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
                            Welcome back.
                        </h1>
                        <p className="text-stride-base/50 text-sm">
                            Log in to your Stride account to continue.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="flex flex-col gap-5">
                        {error && (
                            <div className="p-3 bg-red-100 border border-red-200 text-red-700 font-bold text-xs rounded-lg uppercase tracking-wider">
                                ⚠️ {error}
                            </div>
                        )}

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

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-stride-primary hover:bg-stride-primaryDark text-white font-extrabold text-sm uppercase tracking-widest rounded-lg transition-colors duration-200 mt-2 disabled:opacity-50"
                        >
                            {isLoading ? "Logging In..." : "Log In"}
                        </button>
                    </form>

                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-stride-muted/30" />
                        <span className="text-stride-base/30 text-xs uppercase tracking-widest">or</span>
                        <div className="flex-1 h-px bg-stride-muted/30" />
                    </div>

                    <p className="text-center text-stride-base/50 text-sm">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-stride-primary font-bold hover:text-stride-primaryDark transition-colors">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}