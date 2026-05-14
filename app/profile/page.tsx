import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 bg-[#181A2F] text-white flex justify-center font-sans">
      
      {/* Main Card Container */}
      <div className="w-full max-w-5xl bg-[#242E49] rounded-2xl overflow-hidden shadow-2xl border border-[#37415C]">
        
        {/* Top Banner (Gradasi Merah ke Maroon) */}
        <div className="h-48 bg-gradient-to-r from-[#B4182D] to-[#54162B]"></div>

        {/* Profile Content Section */}
        <div className="px-8 sm:px-12 pb-12 relative">
          
          {/* Avatar Container */}
          <div className="flex flex-col sm:flex-row sm:items-end -mt-16 mb-8 gap-4">
            
            {/* Profile Picture */}
            <div className="relative w-32 h-32 rounded-full border-4 border-[#242E49] bg-[#181A2F] overflow-hidden flex-shrink-0 shadow-lg">
              <Image
                src="/user.png"
                alt="Profile Picture"
                fill
                sizes="128px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Header Info placeholder*/}
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-wide">Nelson Skin Fade</h1>
            <p className="text-[#FDA481] font-medium mt-1">Skibidi@emailhere.com</p>
          </div>

          {/* Form / Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Full Name placeholder */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Full Name
              </label>
              <div className="p-4 bg-[#181A2F] rounded-xl border border-[#37415C] text-gray-100">
                Nelson Skin Fade
              </div>
            </div>

            {/* Username placeholder */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Username
              </label>
              <div className="p-4 bg-[#181A2F] rounded-xl border border-[#37415C] text-gray-100">
                chopwan
              </div>
            </div>

            {/* Email Address placeholder */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Email Address
              </label>
              <div className="p-4 bg-[#181A2F] rounded-xl border border-[#37415C] text-gray-100">
                Skibidi@emailhere.com
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}