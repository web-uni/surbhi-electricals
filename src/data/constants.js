// ─── constants.js ─────────────────────────────────────────────
// Central data store — all text, links, images, products & brands
// Edit here to update content across the entire website.

export const NAV_LINKS = ["Home", "About", "Products", "Brands", "Why Us", "Contact"];

export const CONTACT = {
    address: "Plot No. 307/311 1/4, Near Ramdev Chokdi, GIDC Ankleshwar, Gujarat – 393002",
    phones: [
        { number: "9998514845", label: "Primary" },
        { number: "8239539533", label: "Secondary" },
        { number: "9079256241", label: "Alternate" },
    ],
    emails: [
        { email: "schneider.ankl@gmail.com", label: "Schneider Enquiries" },
        { email: "surbhielectric.ankl@gmail.com", label: "General Enquiries" },
    ],
    mapsUrl: "https://maps.google.com/?q=GIDC+Ankleshwar+Gujarat+393002",
};

export const STATS = [
    { value: "500+", label: "Products", icon: "📦" },
    { value: "10+", label: "Years Experience", icon: "🏆" },
    { value: "50+", label: "Top Brands", icon: "⭐" },
    { value: "1000+", label: "Happy Clients", icon: "🤝" },
];

export const PRODUCTS = [
    {
        id: 1,
        icon: "⚡",
        title: "Electrical Switchgear",
        subtitle: "Protection & Control",
        color: "#1565C0",
        accent: "#42A5F5",
        image: "https://images.unsplash.com/photo-1566417110090-6b15a06ec800?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        items: ["MCCB / MPCB / SFUs", "Contactors", "MCB / MCCB / RCBO", "Motor Starters", "Simocode", "Protection Relays", "Control Relays", "Fuse", "Change Over Switches", "Static Switches"],
        brands: "Schneider · Siemens · ABB · Legrand · L&T",
    },
    {
        id: 2,
        icon: "🔌",
        title: "Cables & Wires",
        subtitle: "Industrial Grade",
        color: "#1A237E",
        accent: "#7986CB",
        image: "https://media.istockphoto.com/id/1155443652/photo/server-rack-with-blue-and-red-internet-patch-cord-cables-connected-to-black-patch-panel-in.jpg?s=612x612&w=0&k=20&c=lTQ6h_ERUb6LSMIqFg_-tMZrJ-UyGJMpvxCwvN54WE4=",
        items: ["Flexible Cables", "Armored Cables", "Shielded Cables", "Acid Proof Cables", "Braided Cables", "Telephone / CAT 6", "High Temp Fiber & Teflon"],
        brands: "Polycab · KEI · RR Kabel · LAPP",
    },
    {
        id: 3,
        icon: "🔧",
        title: "Cable Gland & Accessories",
        subtitle: "FLP / WP Rated",
        color: "#006064",
        accent: "#4DD0E1",
        image: "https://images.unsplash.com/photo-1621495994005-3dc1b01e7f65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FibGUlMjBHbGFuZCUyMCUyNiUyMEFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
        items: ["Glands (FLP & WP)", "Lugs – Ring/Pin/Hollow/Fork", "Cable Joint Kit 11KV/33KV", "Heat Shrinkable Sleeves", "Crimping Tool", "Cable Tie (PVC/SS)"],
        brands: "Dowell's · HMI · Comet · CYG · Baliga",
    },
    {
        id: 4,
        icon: "📐",
        title: "Cable Trays",
        subtitle: "HDGI & FRP",
        color: "#4A148C",
        accent: "#CE93D8",
        image: "https://plus.unsplash.com/premium_photo-1764705669721-b09fb195def8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhYmxlJTIwdHJheXN8ZW58MHx8MHx8fDA%3D",
        items: ["Ladder Type", "Perforated Type", "Box Type", "With Covers", "HDGI Finish", "FRP Variant"],
        brands: "All major industrial brands",
    },
    {
        id: 5,
        icon: "🌍",
        title: "Earthing Products",
        subtitle: "Copper & GI",
        color: "#1B5E20",
        accent: "#66BB6A",
        image: "https://plus.unsplash.com/premium_photo-1661962491788-20eae63fdd31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEVhcnRoaW5nJTIwUHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
        items: ["Earthing Strips (Cu/GI)", "Earthing Drum Reels", "Earthing Jumper", "Earthing Plates", "Electrodes / Backfill", "Chambers with Covers"],
        brands: "Leading earthing specialists",
    },
    {
        id: 6,
        icon: "💡",
        title: "Lighting Solutions",
        subtitle: "LED & Industrial",
        color: "#E65100",
        accent: "#FFAB40",
        image: "https://plus.unsplash.com/premium_photo-1705762309794-0492f3c1fce8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fExpZ2h0aW5nJTIwU29sdXRpb25zfGVufDB8fDB8fHww",
        items: ["LED Lamps & Lighting", "Retrofitting FLP/WP", "Street Lighting", "Flood Lighting", "Gate Decorative Lights", "Well Glass / High Bay"],
        brands: "Syska · Philips · Bajaj · Crompton · Havells",
    },
    {
        id: 7,
        icon: "🗄️",
        title: "Distribution Panels",
        subtitle: "FLP / WP / IP Rated",
        color: "#880E4F",
        accent: "#F48FB1",
        image: "https://media.istockphoto.com/id/1139588963/photo/electrical-breaker-inside-electric-panel-in-power-plant.webp?a=1&b=1&s=612x612&w=0&k=20&c=fLjbq3ED-JibrhWPNz31HTG3lKZ5EBJUsuqUAAOYzIA=",
        items: ["IP Rating Panels (FLP/WP)", "Junction Box", "LED Indication Lamp", "Push Button", "Rotary Switch", "Terminal Blocks", "PVC Duct & Conduit"],
        brands: "Hensel · CYG · Elmex · Salzer · Selec",
    },
    {
        id: 8,
        icon: "📏",
        title: "Measuring Instruments",
        subtitle: "Precision Metering",
        color: "#33691E",
        accent: "#AED581",
        image: "https://plus.unsplash.com/premium_photo-1683141457896-367f0ad2ddcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Vm9sdG1ldGVycyUyMCUyNiUyMEFtbWV0ZXJzfGVufDB8fDB8fHww",
        items: ["Voltmeters & Ammeters", "Energy Meters", "Power Analyzers", "Clamp Meters", "Panel Meters", "Process Indicators"],
        brands: "Selec · Schneider · Siemens",
    },
];

export const BRAND_LOGOS = [
    { name: "Schneider Electric", category: "Switchgear", bg: "#3DCD58", logo: "https://download.logo.wine/logo/Schneider_Electric/Schneider_Electric-Logo.wine.png" },
    { name: "Siemens", category: "Switchgear", bg: "#009999", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMghh4lB_t8OTjSENh1BB9Rh3Zd9jaQGzptA&s" },
    { name: "ABB", category: "Switchgear", bg: "#FF000F", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/1280px-ABB_logo.svg.png" },
    { name: "Legrand", category: "Switchgear", bg: "#6E2585", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvy3RwA0uFChh10qzBYSNSQXB9RhNKiRzyw&s" },
    { name: "L&T Switchgear", category: "Switchgear", bg: "#004B87", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhmv-JqExLSi6UgVJsKT-dO4DBwBxWruWNA&s" },
    { name: "Polycab", category: "Cables", bg: "#E31E24", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrY2P6xPNcI8GWMTn8VS0dMShQpIdVzEuNw&s" },
    { name: "Havells", category: "Lighting", bg: "#C8102E", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Havells_Logo.svg/330px-Havells_Logo.svg.png" },
    { name: "Philips", category: "Lighting", bg: "#0B5ED7", logo: "https://images.seeklogo.com/logo-png/10/2/philips-logo-png_seeklogo-108440.png" },
    { name: "Bajaj Electricals", category: "Lighting", bg: "#003087", logo: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-18974,resizemode-75,msid-88190248/news/company/corporate-trends/bajaj-electricals-board-approves-review-of-corporate-structure.jpg" },
    { name: "Crompton", category: "Lighting", bg: "#5C8727", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5p6M_NvfdlNBc8K90oXjJRL2Oq-tGliyTQ&sg" },
    { name: "KEI Cables", category: "Cables", bg: "#003087", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xxTbxvblrow0QMAMqtRy9wn_6dsVnd6QLA&s" },
    { name: "C&S Electric", category: "Switchgear", bg: "#F47920", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQab531TrCVRaUbVGMO9VkAWWGTAZlr-qvv5w&s" },
];

export const WHY_US = [
    { icon: "🏆", title: "Authorised Dealer", desc: "Certified channel partner for Schneider, Siemens, ABB and more." },
    { icon: "📦", title: "One-Stop Shop", desc: "8+ product categories — cables, switchgear, lighting and beyond." },
    { icon: "🚚", title: "Fast Delivery", desc: "Located in GIDC Ankleshwar, ensuring quick regional turnarounds." },
    { icon: "🔬", title: "Quality Assured", desc: "Products sourced from verified manufacturers with full compliance." },
    { icon: "🤝", title: "Expert Support", desc: "Technical guidance to choose the right product for your need." },
    { icon: "💰", title: "Best Pricing", desc: "Market-competitive rates and bulk order discounts available." },
];