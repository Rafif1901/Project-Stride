import Link from "next/link";

export default function NavigationBar() {
    return (
        <div className="w-full flex justify-center py-6 px-4 absolute top-0 z-50">
            {/* Floating navbar */}
            <nav className="w-full max-w-5xl flex items-center justify-between px-6 py-3 bg-[#02020a]/80 backdrop-blur-md border border-zinc-700/50 rounded-full shadow-2xl shadow-black/50">

                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">
                    {/* ganti logo nanti */}
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                    </div>
                    <span className="text-xl font-bold text-white tracking-wide">
                        Stride
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link href="/register" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                        Register
                    </Link>
                    <Link href="/dashboard" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                        Dashboard
                    </Link>
                </div>

                {/* Login Button */}
                <div>
                    <button className="px-6 py-2 bg-gradient-to-r from-emerald-900 to-teal-900 hover:from-emerald-800 hover:to-teal-800 border border-emerald-700/50 text-white text-sm font-medium rounded-lg transition-all shadow-lg">
                        Login
                    </button>
                </div>

            </nav>
        </div>
    );
}