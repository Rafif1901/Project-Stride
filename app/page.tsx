import Header from '@/components/header'; // Sesuaikan path jika berbeda

export default function Home() {
  return (
    // Tambahkan pt-24 (padding-top) agar konten tidak tertutup header yang fixed
    <div className="min-h-screen bg-[#05051a] text-white flex flex-col font-sans pt-24">
      <Header />
      
      {/* body */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-8">
        {/* blablabla -> Nanti Hero Section masuk ke sini */}
        <div className="h-[2000px] border border-dashed border-gray-700 p-4 rounded-lg">
          <p className="text-gray-400">Scroll untuk melihat efek header...</p>
        </div>
      </main>
    </div>
  );
}