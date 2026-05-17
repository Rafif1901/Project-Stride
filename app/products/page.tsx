"use client";

import { useState, useEffect } from "react";
import { Products, DEFAULT_PRODUCTS } from "./types";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

export default function ProductsPage() {
    const [products, setProducts] = useState<Products[]>([]);
    const [selected, setSelected] = useState<Products | null>(null);
    const [filter, setFilter] = useState("Semua");

    const categories = ["Semua", "Running Top", "Limited Edition"];

    useEffect(() => {
        try {
            const stored = localStorage.getItem("stride_products");
            if (stored) {
                setProducts(JSON.parse(stored));
            } else {
                setProducts(DEFAULT_PRODUCTS);
                localStorage.setItem("stride_products", JSON.stringify(DEFAULT_PRODUCTS));
            }
        } catch {
            setProducts(DEFAULT_PRODUCTS);
        }
    }, []);

    const filtered =
        filter === "Semua"
            ? products
            : products.filter((p) => p.category === filter);

    return (
        <main className="min-h-screen bg-stride-bg pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col gap-2 mb-10">
                    <p className="text-stride-peach text-xs font-bold uppercase tracking-widest">
                        Stride Store
                    </p>
                    <h1 className="text-stride-base text-4xl md:text-5xl font-extrabold">
                        Stride Official Gear
                    </h1>
                    <p className="text-stride-base/60 text-sm mt-1">
                        High Quality Materials, Designed for Runners, Loved by All.
                    </p>
                </div>

                {/* Category */}
                <div className="flex gap-3 flex-wrap mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full border text-sm font-bold uppercase tracking-widest transition-all duration-200 ${filter === cat
                                ? "bg-stride-peach border-stride-peach text-white"
                                : "border-stride-muted/20 text-stride-base/60 hover:border-stride-muted/50 hover:text-stride-base"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center py-24 text-white/30 text-lg">
                        No Products Available.
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {filtered.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={() => setSelected(product)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {selected && (
                <ProductDetail product={selected} onClose={() => setSelected(null)} />
            )}
        </main>
    );
}