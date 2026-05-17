import { Products, formatRupiah } from "./types";

export default function ProductCard({ product, onClick }: { product: Products; onClick: () => void; }) {
    const totalStock = product.stock;

    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-white hover:shadow-lg border border-stride-muted/10 hover:border-stride-peach/50 rounded-2xl overflow-hidden transition-all duration-300"
        >
            <div className="aspect-square bg-gray-50 flex items-center justify-center text-8xl overflow-hidden">
                {product.images && product.images.length > 0 ? (
                    <img src={product.images[0]} alt={product.item_name} className="object-contain w-full h-full p-4" />
                ) : (
                    <span className="group-hover:scale-105 transition-transform duration-300">👕</span>
                )}
            </div>

            <div className="p-4 flex flex-col gap-2">
                <span className="text-stride-peach text-xs font-bold uppercase tracking-widest">
                    {product.category}
                </span>
                <h3 className="text-stride-base font-bold text-sm leading-snug line-clamp-2">
                    {product.item_name}
                </h3>
                <div className="flex items-center justify-between mt-1">
                    <p className="text-stride-base font-extrabold text-lg">
                        {formatRupiah(product.price)}
                    </p>
                    {totalStock <= 0 ? (
                        <span className="text-red-400 text-xs font-bold uppercase">Out of Stock</span>
                    ) : (
                        <span className="text-stride-base/40 text-xs">{totalStock} in Stock</span>
                    )}
                </div>
                <button className="mt-2 w-full py-2 border border-stride-peach text-stride-peach text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-stride-peach hover:text-white transition-colors duration-200">
                    See Details
                </button>
            </div>
        </div>
    );
}