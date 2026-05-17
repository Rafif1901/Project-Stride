export type Products = {
    item_id: number;
    item_name: string;
    price: number | string;
    description: string;
    images: string[];
    sizes: string[];
    stock: number;
    category: string;
};

export const FRONTEND_ASSETS: Record<number, { category: string; images: string[] }> = {
    1: {
        category: "Running Top",
        images: ["https://static.vecteezy.com/system/resources/thumbnails/048/396/084/small/white-and-teal-gradient-t-shirt-mockup-isolated-on-transparent-background-free-png.png"]
    },
    2: {
        category: "Running Top",
        images: ["https://png.pngtree.com/png-vector/20240327/ourmid/pngtree-sports-jerseys-jerseys-running-shirts-navy-blue-stripes-png-image_12232787.png"]
    },
    3: {
        category: "Limited Edition",
        images: ["https://images.podos.io/m9pypvnxth6cqfpnut7mbn6z6v3zw2qqwzy9o6thdrvuct8y.png.png?w=1080&h=auto"]
    }
};

export function formatRupiah(price: number | string) {
    const numericPrice = Number(price) || 0; // DIUBAH: Paksa jadi angka untuk mencegah error
    return "Rp" + numericPrice.toLocaleString("id-ID");
}