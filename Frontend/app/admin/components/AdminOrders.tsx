"use client";

export default function AdminOrders() {
    return (
        <section className="bg-white border border-[#37415C]/10 rounded-2xl p-12 shadow-sm text-center animate-fade-in flex flex-col items-center justify-center">
            <h2 className="font-extrabold text-[#181A2F] text-2xl mb-3">
                Transaction History Not Available Yet
            </h2>
            <p className="text-[#181A2F]/60 text-base max-w-lg mx-auto mb-6">
                The API endpoint for Admin to retrieve <b>all user order data</b> is not yet available in the current Backend system.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-left text-sm max-w-lg">
                <p className="font-bold mb-2">Tasks for Backend Team:</p>
                <ol className="list-decimal pl-5 text-[#181A2F]/80 flex flex-col gap-1">
                    <li>Create a new route: <code className="bg-gray-200 px-1 py-0.5 rounded text-[#B4182D]">GET /transactions/all</code> in <span className="italic">transactionRoutes.js</span></li>
                    <li>Protect it with <code className="bg-gray-200 px-1 py-0.5 rounded">authorizeAdmin</code> middleware</li>
                    <li>Create controller & service for query <code className="bg-gray-200 px-1 py-0.5 rounded">SELECT * FROM transactions</code></li>
                </ol>
            </div>
        </section>
    );
}