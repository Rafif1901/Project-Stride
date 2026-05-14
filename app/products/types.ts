export type Products = {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
    sizes: { size: string; stock: number }[];
    category: string;
};

export const DEFAULT_PRODUCTS: Products[] = [
    {
        id: 1,
        name: "Stride Performance Tee - (warna)",
        price: 99000,
        description: "Lightweight, breathable running tee for top athletes",
        images: ["https://static.vecteezy.com/system/resources/thumbnails/048/396/084/small/white-and-teal-gradient-t-shirt-mockup-isolated-on-transparent-background-free-png.png"],
        sizes: [
            { size: "XS", stock: 10 },
            { size: "S", stock: 10 },
            { size: "M", stock: 10 },
            { size: "L", stock: 10 },
            { size: "XL", stock: 10 },
            { size: "XXL", stock: 10 },
        ],
        category: "Running Top"
    },
    {
        id: 2,
        name: "Stride Race Tee - (warna)",
        price: 99000,
        description: "Lightweight, breathable running tee for top racers",
        images: ["https://png.pngtree.com/png-vector/20240327/ourmid/pngtree-sports-jerseys-jerseys-running-shirts-navy-blue-stripes-png-image_12232787.png"],
        sizes: [
            { size: "XS", stock: 10 },
            { size: "S", stock: 10 },
            { size: "M", stock: 10 },
            { size: "L", stock: 10 },
            { size: "XL", stock: 10 },
            { size: "XXL", stock: 10 },
        ],
        category: "Running Top"
    },
    {
        id: 3,
        name: "Stride Skena Tee - (warna)",
        price: 99000,
        description: "Lightweight, breathable running tee for skena runners",
        images: ["https://images.podos.io/m9pypvnxth6cqfpnut7mbn6z6v3zw2qqwzy9o6thdrvuct8y.png.png?w=1080&h=auto"],
        sizes: [
            { size: "XS", stock: 3 },
            { size: "S", stock: 3 },
            { size: "M", stock: 3 },
            { size: "L", stock: 3 },
            { size: "XL", stock: 3 },
            { size: "XXL", stock: 3 },
        ],
        category: "Running Top"
    },
];

export function formatRupiah(price: number) {
    return "Rp" + price.toLocaleString("id-ID");
}