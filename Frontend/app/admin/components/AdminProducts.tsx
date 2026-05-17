"use client";

import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000";

export default function AdminProducts() {
    const [products, setProducts] = useState<any[]>([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [newProduct, setNewProduct] = useState({
        item_name: "",
        description: "",
        price: "",
        stock: "",
        sizes: "S,M,L,XL"
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await fetch(`${API_URL}/marketplace`);
            const data = await res.json();
            if (data.success) setProducts(data.payload);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    const handleDeleteProduct = async (id: number) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        try {
            const token = localStorage.getItem("token") || "";
            const res = await fetch(`${API_URL}/marketplace/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (res.ok) setProducts(products.filter(p => p.item_id !== id));
        } catch (error) {
            alert("Failed to delete product");
        }
    };

    const handleCreateProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token") || "";

            const productData = {
                item_name: newProduct.item_name,
                description: newProduct.description,
                price: Number(newProduct.price),
                stock: Number(newProduct.stock),
                sizes: newProduct.sizes.split(",").map(s => s.trim())
            };

            const res = await fetch(`${API_URL}/marketplace`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(productData)
            });

            if (res.ok) {
                alert("Product added to database successfully!");
                setIsAddModalOpen(false);
                fetchProducts();
            } else {
                const errData = await res.json();
                alert(`Failed: ${errData.message}`);
            }
        } catch (error) {
            console.error("Failed to create product", error);
        }
    };

    return (
        <section className="bg-white border border-stride-muted/10 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-extrabold text-stride-base text-xl">Store Product List</h2>
                <button onClick={() => setIsAddModalOpen(true)} className="px-4 py-2 bg-stride-primary text-white font-bold text-xs rounded-lg uppercase tracking-wider hover:bg-stride-primaryDark transition">
                    + Add Product
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-stride-muted/10">
                        <tr>
                            <th className="p-4 font-bold text-stride-base/50 uppercase tracking-widest text-xs">Item Name</th>
                            <th className="p-4 font-bold text-stride-base/50 uppercase tracking-widest text-xs text-center">Global Stock</th>
                            <th className="p-4 font-bold text-stride-base/50 uppercase tracking-widest text-xs text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stride-muted/5">
                        {products.map(p => (
                            <tr key={p.item_id} className="hover:bg-gray-50/50 transition">
                                <td className="p-4">
                                    <p className="font-bold text-stride-base">{p.item_name}</p>
                                    <p className="text-stride-peach font-extrabold mt-1">Rp {Number(p.price).toLocaleString('id-ID')}</p>
                                </td>
                                <td className="p-4 text-center font-extrabold text-stride-base">{p.stock}</td>
                                <td className="p-4 text-right">
                                    <button onClick={() => handleDeleteProduct(p.item_id)} className="text-red-500 hover:bg-red-50 font-bold text-xs border border-red-200 px-3 py-1.5 rounded transition">DELETE</button>
                                </td>
                            </tr>
                        ))}
                        {products.length === 0 && (
                            <tr>
                                <td colSpan={3} className="p-8 text-center text-stride-base/40">No products in the database yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* ADD PRODUCT MODAL */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-stride-base/70 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-extrabold text-stride-base">Add Product</h3>
                            <button onClick={() => setIsAddModalOpen(false)} className="text-stride-base/50 hover:text-stride-base text-xl">X</button>
                        </div>

                        <form onSubmit={handleCreateProduct} className="flex flex-col gap-4">
                            <input
                                type="text" placeholder="Item Name" required
                                value={newProduct.item_name}
                                onChange={e => setNewProduct({ ...newProduct, item_name: e.target.value })}
                                className="p-3 border border-stride-muted/30 rounded-lg text-stride-base bg-white placeholder-stride-base/40 focus:outline-none focus:border-stride-peach focus:ring-1 focus:ring-stride-peach"
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="number" placeholder="Price (Rp)" required
                                    value={newProduct.price}
                                    onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
                                    className="p-3 border border-stride-muted/30 rounded-lg text-stride-base bg-white placeholder-stride-base/40 focus:outline-none focus:border-stride-peach focus:ring-1 focus:ring-stride-peach"
                                />
                                <input
                                    type="number" placeholder="Total Stock" required
                                    value={newProduct.stock}
                                    onChange={e => setNewProduct({ ...newProduct, stock: e.target.value })}
                                    className="p-3 border border-stride-muted/30 rounded-lg text-stride-base bg-white placeholder-stride-base/40 focus:outline-none focus:border-stride-peach focus:ring-1 focus:ring-stride-peach"
                                />
                            </div>

                            <div>
                                <p className="text-xs font-bold text-stride-base/70 uppercase tracking-widest mb-1.5">Sizes (Comma separated)</p>
                                <input
                                    type="text" required
                                    value={newProduct.sizes}
                                    onChange={e => setNewProduct({ ...newProduct, sizes: e.target.value })}
                                    className="p-3 border border-stride-muted/30 rounded-lg text-stride-base bg-white placeholder-stride-base/40 focus:outline-none focus:border-stride-peach focus:ring-1 focus:ring-stride-peach w-full"
                                />
                            </div>

                            <textarea
                                placeholder="Short Description" required rows={3}
                                value={newProduct.description}
                                onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
                                className="p-3 border border-stride-muted/30 rounded-lg text-stride-base bg-white placeholder-stride-base/40 focus:outline-none focus:border-stride-peach focus:ring-1 focus:ring-stride-peach resize-none"
                            ></textarea>

                            <div className="flex gap-3 mt-4">
                                <button type="button" onClick={() => setIsAddModalOpen(false)} className="flex-1 p-3 border border-stride-muted/30 rounded-xl font-bold text-stride-base text-sm uppercase tracking-widest hover:bg-gray-50 transition">Cancel</button>
                                <button type="submit" className="flex-1 p-3 bg-stride-peach text-white rounded-xl font-extrabold text-sm uppercase tracking-widest hover:bg-orange-600 transition shadow-md">Save to DB</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}