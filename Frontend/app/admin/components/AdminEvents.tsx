"use client";

import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000";

export default function AdminEvents() {
    const [events, setEvents] = useState<any[]>([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [newEvent, setNewEvent] = useState({
        event_name: "",
        start_place: "",
        finish_place: "",
        event_date: "",
        distance_km: ""
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const res = await fetch(`${API_URL}/tracks`);
            const data = await res.json();
            if (data.success) setEvents(data.payload);
        } catch (error) {
            console.error("Gagal mengambil data event:", error);
        }
    };

    const handleDeleteEvent = async (id: number) => {
        if (!window.confirm("Yakin hapus event ini dari database?")) return;
        try {
            const token = localStorage.getItem("token") || "";
            const res = await fetch(`${API_URL}/tracks/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (res.ok) setEvents(events.filter(e => e.track_id !== id));
        } catch (error) {
            alert("Gagal menghapus event");
        }
    };

    const handleCreateEvent = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token") || "";

            const eventData = {
                ...newEvent,
                distance_km: Number(newEvent.distance_km)
            };

            const res = await fetch(`${API_URL}/tracks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(eventData)
            });

            if (res.ok) {
                alert("Event berhasil ditambahkan ke Database!");
                setIsAddModalOpen(false);
                fetchEvents();
            } else {
                const errData = await res.json();
                alert(`Gagal: ${errData.message}`);
            }
        } catch (error) {
            console.error("Gagal buat event", error);
        }
    };

    return (
        <section className="bg-white border border-stride-muted/10 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-extrabold text-stride-base text-xl">Daftar Event Berlari</h2>
                <button onClick={() => setIsAddModalOpen(true)} className="px-4 py-2 bg-stride-primary text-white font-bold text-xs rounded-lg uppercase tracking-wider hover:bg-stride-primaryDark transition">
                    + Tambah Event
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-stride-muted/10">
                        <tr>
                            <th className="p-4 font-bold text-stride-base/50 uppercase tracking-widest text-xs">Nama Event</th>
                            <th className="p-4 font-bold text-stride-base/50 uppercase tracking-widest text-xs">Rute (Start - Finish)</th>
                            <th className="p-4 font-bold text-stride-base/50 uppercase tracking-widest text-xs text-center">Jarak</th>
                            <th className="p-4 font-bold text-stride-base/50 uppercase tracking-widest text-xs">Tanggal</th>
                            <th className="p-4 font-bold text-stride-base/50 uppercase tracking-widest text-xs text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stride-muted/5">
                        {events.map(e => (
                            <tr key={e.track_id} className="hover:bg-gray-50/50 transition">
                                <td className="p-4 font-bold text-stride-base">{e.event_name}</td>
                                <td className="p-4 text-stride-base/70">{e.start_place} <span className="font-bold text-stride-peach">→</span> {e.finish_place}</td>
                                <td className="p-4 text-center font-bold text-stride-base">{e.distance_km} km</td>
                                <td className="p-4 text-stride-base/60">{new Date(e.event_date).toLocaleDateString()}</td>
                                <td className="p-4 text-right">
                                    <button onClick={() => handleDeleteEvent(e.track_id)} className="text-red-500 hover:bg-red-50 px-3 py-1.5 rounded font-bold text-xs border border-red-200 transition">
                                        HAPUS
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {events.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-stride-base/40">Belum ada data event di database.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-stride-base/70 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-extrabold text-stride-base">Add Event</h3>
                            <button onClick={() => setIsAddModalOpen(false)} className="text-stride-base/50 hover:text-stride-base text-xl">✕</button>
                        </div>

                        <form onSubmit={handleCreateEvent} className="flex flex-col gap-4">
                            <input
                                type="text" placeholder="Nama Event (Contoh: Stride City Run)" required
                                value={newEvent.event_name}
                                onChange={e => setNewEvent({ ...newEvent, event_name: e.target.value })}
                                className="p-3 border border-stride-muted/30 rounded-lg text-stride-base bg-white placeholder-stride-base/40 focus:outline-none focus:border-stride-peach focus:ring-1 focus:ring-stride-peach"
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text" placeholder="Lokasi Start" required
                                    value={newEvent.start_place}
                                    onChange={e => setNewEvent({ ...newEvent, start_place: e.target.value })}
                                    className="p-3 border border-stride-muted/30 rounded-lg text-stride-base bg-white placeholder-stride-base/40 focus:outline-none focus:border-stride-peach focus:ring-1 focus:ring-stride-peach"
                                />
                                <input
                                    type="text" placeholder="Lokasi Finish" required
                                    value={newEvent.finish_place}
                                    onChange={e => setNewEvent({ ...newEvent, finish_place: e.target.value })}
                                    className="p-3 border border-stride-muted/30 rounded-lg text-stride-base bg-white placeholder-stride-base/40 focus:outline-none focus:border-stride-peach focus:ring-1 focus:ring-stride-peach"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="date" required
                                    value={newEvent.event_date}
                                    onChange={e => setNewEvent({ ...newEvent, event_date: e.target.value })}
                                    className="p-3 border border-stride-muted/30 rounded-lg text-stride-base bg-white placeholder-stride-base/40 focus:outline-none focus:border-stride-peach focus:ring-1 focus:ring-stride-peach"
                                />
                                <input
                                    type="number" placeholder="Jarak (KM)" required
                                    value={newEvent.distance_km}
                                    onChange={e => setNewEvent({ ...newEvent, distance_km: e.target.value })}
                                    className="p-3 border border-stride-muted/30 rounded-lg text-stride-base bg-white placeholder-stride-base/40 focus:outline-none focus:border-stride-peach focus:ring-1 focus:ring-stride-peach"
                                />
                            </div>

                            <div className="flex gap-3 mt-4">
                                <button type="button" onClick={() => setIsAddModalOpen(false)} className="flex-1 p-3 border border-stride-muted/30 rounded-xl font-bold text-stride-base text-sm uppercase tracking-widest hover:bg-gray-50 transition">Cancel</button>
                                <button type="submit" className="flex-1 p-3 bg-stride-primary hover:bg-stride-primaryDark text-white rounded-xl font-extrabold text-sm uppercase tracking-widest transition shadow-md">Save Event</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}