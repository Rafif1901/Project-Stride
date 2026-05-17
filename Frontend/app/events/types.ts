export type Event = {
    id: number;
    name: string;
    date: string;
    location: string;
    city: string;
    price: number;
    distance: number;
    description: string;
    image: string;
};

export const DEFAULT_EVENTS: Event[] = [
    {
        id: 1,
        name: "Jakarta City Run 2026",
        date: "12 July 2026",
        location: "Monas, Jakarta",
        city: "Jakarta",
        price: 150000,
        distance: 5,
        description: "A scenic 5K run through the heart of Jakarta, passing iconic landmarks and finishing at Monas.",
        image: "",
    },
    {
        id: 2,
        name: "Jakarta Marathon 2026",
        date: "20 August 2026",
        location: "GBK, Jakarta",
        city: "Jakarta",
        price: 350000,
        distance: 42,
        description: "The biggest marathon in Jakarta, starting and finishing at Gelora Bung Karno stadium.",
        image: "",
    },
    {
        id: 3,
        name: "Bandung Highland Run",
        date: "5 September 2026",
        location: "Dago, Bandung",
        city: "Bandung",
        price: 200000,
        distance: 10,
        description: "A refreshing 10K run through Bandung's cool highland roads and scenic tea plantations.",
        image: "",
    },
    {
        id: 4,
        name: "Bandung Half Marathon",
        date: "3 October 2026",
        location: "Alun-Alun, Bandung",
        city: "Bandung",
        price: 275000,
        distance: 21,
        description: "Take on Bandung's iconic streets in this challenging half marathon through the city center.",
        image: "",
    },
    {
        id: 5,
        name: "Bogor Trail Run",
        date: "18 October 2026",
        location: "Kebun Raya, Bogor",
        city: "Bogor",
        price: 175000,
        distance: 10,
        description: "Run through the lush greenery of Kebun Raya Bogor in this exciting trail run event.",
        image: "",
    },
    {
        id: 6,
        name: "Bogor Night Run",
        date: "15 November 2026",
        location: "Sempur Park, Bogor",
        city: "Bogor",
        price: 125000,
        distance: 5,
        description: "Experience Bogor under the stars in this fun nighttime 5K through Sempur Park.",
        image: "",
    },
];

export function formatRupiah(price: number) {
    return "Rp" + price.toLocaleString("id-ID");
}