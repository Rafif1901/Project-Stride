export default function Home() {
  return (
    <div className="flex flex-col font-sans relative min-h-screen">
      {/* body */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-8 pt-32">
        {/* dashboard */}
        <div className="w-full h-96 border border-zinc-800 rounded-2xl flex items-centr justify-center bg-[#02020a]/50">
          <p className="text-zinc-500">Dashbord Content</p>

        </div>
      </main>
    </div>
  );
}