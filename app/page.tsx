export default function Home() {
  return (
    <div className="min-h-screen bg-[#05051a] text-white flex flex-col font-sans">
      {/* header*/}
      <header className="w-full h-24 bg-[#02020a] flex items-center justify-between px-8 shadow-2xl shadow-black/80 z-10">
        <h1 className="text-2xl font-bold text-white">Stride (nanti pake logo)</h1>
        
        {/* placeholder buat profile*/}
        <div className="flex items-center px-6 py-2 bg-zinc-900/80 rounded-full border border-zinc-800 cursor-pointer hover:bg-zinc-800 transition-all">
          <span className="text-base font-medium tracking-wide">Profile</span>
        </div>
      </header>

      {/* body */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-8">
        {/* blablabla */}
      </main>
    </div>
  );
}