import Link from 'next/link';

export default function Header() {
  return (

    <header className="w-full h-24 bg-[#02020a]/90 backdrop-blur-md flex items-center justify-between px-8 shadow-2xl shadow-black/80 fixed top-0 z-50">
      
      <Link href="/">
        <h1 className="text-2xl font-bold text-white tracking-tight hover:text-gray-300 transition">
          Stride <span className="text-sm font-normal text-gray-500">(nanti pake logo)</span>
        </h1>
      </Link>

      {/* Tengah: Navigasi Menu (Sembunyikan di layar kecil/mobile) */}
      <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
        <Link href="/events" className="hover:text-white transition-colors duration-200">
          Events
        </Link>
        <Link href="/leaderboard" className="hover:text-white transition-colors duration-200">
          Leaderboard
        </Link>
        <Link href="/market" className="hover:text-white transition-colors duration-200">
          Market
        </Link>
      </nav>

      {/* Kanan: Profile / Auth */}
      <div className="flex items-center gap-4">
        {/* Tombol Profile dengan style pil milikmu */}
        <div className="flex items-center px-6 py-2 bg-zinc-900/80 rounded-full border border-zinc-800 cursor-pointer hover:bg-zinc-800 transition">
          <span className="text-base font-medium tracking-wide text-white">Profile</span>
        </div>
      </div>

    </header>
  );
}