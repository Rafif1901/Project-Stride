"use client";

import { useState, useEffect } from "react";
import { Products, formatRupiah } from "./types";

export default function ProductDetail({
    product,
    onClose
}: {
    product: Products;
    onClose: () => void;
}) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [qty, setQty] = useState(1);
    const [mainImage, setMainImage] = useState(product.images[0]);
    const [added, setAdded] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(t);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 250);
    };

    const selectedStock = product.sizes.find((s) => s.size === selectedSize)?.stock ?? 0;

    const handleBuy = () => {
        if (!selectedSize) return;
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-250 ${
                visible ? "bg-black/50 backdrop-blur-sm" : "bg-black/0 backdrop-blur-none"
            }`}
            onClick={handleClose}
        >
            <div
                className={`relative bg-white border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-250 ${
                    visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stride-base/5 hover:bg-stride-base/10 flex items-center justify-center text-stride-base transition"
                >
                    ✕
                </button>
                <div className="flex flex-col md:flex-row gap-0">
                    {/* Images Area */}
                    <div className="md:w-1/2 p-6 flex flex-col gap-3">
                        <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                            {mainImage ? (
                                <img src={mainImage} alt={product.name} className="object-contain w-full h-full" />
                            ) : (
                                <div className="text-6xl">👕</div>
                            )}
                        </div>
                        <div className="flex gap-2">
                            {product.images.slice(0, 4).map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setMainImage(img)}
                                    className={`w-16 h-16 rounded-lg overflow-hidden bg-gray-50 border-2 transition ${mainImage === img
                                        ? "border-stride-peach"
                                        : "border-transparent"
                                        }`}
                                >
                                    <img src={img} alt="thumb" className="object-cover w-full h-full" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Info Area */}
                    <div className="md:w-1/2 p-6 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-stride-muted/10">
                        <span className="text-stride-peach text-xs font-bold uppercase tracking-widest">
                            {product.category}
                        </span>

                        <h2 className="text-stride-base text-2xl font-extrabold leading-snug">
                            {product.name}
                        </h2>

                        <p className="text-stride-peach text-3xl font-extrabold">
                            {formatRupiah(product.price)}
                        </p>

                        <div className="w-full h-px bg-stride-muted/10" />

                        <p className="text-stride-base/70 text-sm leading-relaxed">
                            {product.description}
                        </p>

                        <div className="w-full h-px bg-stride-muted/10" />

                        {/* Size selector */}
                        <div className="flex flex-col gap-2">
                            <p className="text-stride-base text-sm font-bold uppercase tracking-widest">
                                Size
                                {selectedSize && (
                                    <span className="ml-2 text-stride-peach normal-case font-semibold">
                                        — {selectedSize}{" "}
                                        <span className="text-stride-base/40 text-xs">
                                            ({selectedStock > 0 ? `${selectedStock} tersedia` : "Habis"})
                                        </span>
                                    </span>
                                )}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((s) => {
                                    const outOfStock = s.stock === 0;
                                    return (
                                        <button
                                            key={s.size}
                                            disabled={outOfStock}
                                            onClick={() => {
                                                setSelectedSize(s.size);
                                                setQty(1);
                                            }}
                                            className={`min-w-[52px] px-3 py-2 rounded-lg border text-sm font-bold transition-all duration-200
                                                ${outOfStock
                                                    ? "border-stride-muted/20 text-stride-base/20 cursor-not-allowed line-through"
                                                    : selectedSize === s.size
                                                        ? "border-stride-peach bg-stride-peach text-stride-base"
                                                        : "border-stride-muted/30 text-stride-base hover:border-stride-peach hover:text-stride-peach"
                                                }`}
                                        >
                                            {s.size}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Qty Selector */}
                        <div className="flex items-center gap-3">
                            <p className="text-stride-base text-sm font-bold uppercase tracking-widest">Jumlah</p>
                            <div className="flex items-center border border-stride-muted/30 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setQty(Math.max(1, qty - 1))}
                                    className="px-3 py-2 text-stride-base hover:bg-stride-muted/5 transition"
                                >
                                    −
                                </button>
                                <span className="px-4 py-2 text-stride-base text-sm font-bold border-x border-stride-muted/30">
                                    {qty}
                                </span>
                                <button
                                    onClick={() => setQty(Math.min(selectedStock || 1, qty + 1))}
                                    disabled={!selectedSize || qty >= selectedStock}
                                    className="px-3 py-2 text-stride-base hover:bg-stride-muted/5 transition disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={handleBuy}
                                disabled={!selectedSize || selectedStock === 0}
                                className="flex-1 px-4 py-3 border border-stride-peach text-stride-peach rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-stride-peach/10 transition disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                {added ? "✓ Product Added to Cart" : "Add to Cart"}
                            </button>
                            <button
                                onClick={handleBuy}
                                disabled={!selectedSize || selectedStock === 0}
                                className="flex-1 px-4 py-3 bg-stride-peach hover:bg-orange-600 text-white rounded-xl font-extrabold text-sm uppercase tracking-widest transition disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}