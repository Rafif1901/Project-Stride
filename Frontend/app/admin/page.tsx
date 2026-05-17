"use client";

import { useState } from "react";
import AdminProducts from "./components/AdminProducts";
import AdminEvents from "./components/AdminEvents.tsx";
import AdminOrders from "./components/AdminOrders";

export default function GlobalAdminPage() {
    const [activeTab, setActiveTab] = useState("products");

    return (
        <main className="min-h-screen bg-[#EEEBE3] pt-32 pb-24 px-6 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">

                {/* Header & Tab Navigation */}
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-[#FDA481] text-xs font-bold uppercase tracking-widest">Stride Central</p>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#181A2F]">Admin Dashboard</h1>
                    </div>

                    <div className="flex gap-4 border-b border-[#37415C]/20 pb-2 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab("products")}
                            className={`pb-2 px-2 font-bold text-sm tracking-wide transition-all ${activeTab === "products" ? "text-[#B4182D] border-b-2 border-[#B4182D]" : "text-[#181A2F]/50 hover:text-[#181A2F]"}`}
                        >
                            Product Management
                        </button>
                        <button
                            onClick={() => setActiveTab("events")}
                            className={`pb-2 px-2 font-bold text-sm tracking-wide transition-all ${activeTab === "events" ? "text-[#B4182D] border-b-2 border-[#B4182D]" : "text-[#181A2F]/50 hover:text-[#181A2F]"}`}
                        >
                            Event Management (Tracks)
                        </button>
                        <button
                            onClick={() => setActiveTab("orders")}
                            className={`pb-2 px-2 font-bold text-sm tracking-wide transition-all ${activeTab === "orders" ? "text-[#B4182D] border-b-2 border-[#B4182D]" : "text-[#181A2F]/50 hover:text-[#181A2F]"}`}
                        >
                            Transaction History
                        </button>
                    </div>
                </div>

                {/* Render Component Based on Active Tab */}
                {activeTab === "products" && <AdminProducts />}
                {activeTab === "events" && <AdminEvents />}
                {activeTab === "orders" && <AdminOrders />}

            </div>
        </main>
    );
}