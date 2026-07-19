// ─── About.jsx ────────────────────────────────────────────────
import useIntersect from "../hooks/useIntersect";

const INFO_CARDS = [
    { icon: "🏭", title: "Industrial Focus", sub: "Serving GIDC industries", color: "#dbeafe", border: "#bfdbfe" },
    { icon: "⭐", title: "Top Brands", sub: "Schneider, Siemens, ABB+", color: "#fef3c7", border: "#fde68a" },
    { icon: "📦", title: "500+ Products", sub: "Complete electrical range", color: "#dcfce7", border: "#bbf7d0" },
    { icon: "🤝", title: "Reliable Partner", sub: "Long-term client trust", color: "#fce7f3", border: "#fbcfe8" },
];

export default function About() {
    const [ref, visible] = useIntersect();

    return (
        <section id="about" className="section-pad" style={{ padding: "100px 24px", background: "white" }}>
            <div ref={ref} className="section-container">
                <div
                    className="about-grid"
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
                >
                    {/* ── Left: text ── */}
                    <div className={`fade-up ${visible ? "visible" : ""}`}>
                        <span className="section-tag">About Us</span>
                        <h2 className="section-heading">
                            Your Trusted Partner for{" "}
                            <span style={{ color: "#1a56db" }}>Industrial Electricals</span>
                        </h2>

                        <p style={{ color: "#4a5568", fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>
                            In a short span of time,{" "}
                            <strong style={{ color: "#1a56db" }}>Surbhi Electricals and Hardware</strong>{" "}
                            has secured excellent business visibility as a leading dealer and supplier of
                            quality switchgear and cables in Gujarat's industrial heartland.
                        </p>
                        <p style={{ color: "#718096", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                            We deal in a wide range of switchgears, cables, lightings, control components,
                            cable trays, earthing products, measuring instruments, and panel accessories.
                            Our products are admired for their superiority and quality excellence
                            amongst market competitors.
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                            {["Authorized Dealer", "Quality Assured", "Industrial Specialists", "GIDC Ankleshwar", "Gujarat Based"].map((tag) => (
                                <span key={tag} style={{ background: "#EBF0FF", color: "#1a56db", border: "1px solid #c7d7ff", fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 50 }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: cards ── */}
                    <div className={`fade-up d2 ${visible ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {/* Address card */}
                        <div style={{ background: "linear-gradient(135deg,#0a1f5c,#1a56db)", borderRadius: 20, padding: 28, color: "white", boxShadow: "0 20px 50px rgba(26,86,219,0.3)" }}>
                            <div style={{ fontSize: 28, marginBottom: 8 }}>📍</div>
                            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>GIDC Ankleshwar, Gujarat</div>
                            <div style={{ color: "#93b4e8", fontSize: 14, lineHeight: 1.6 }}>
                                Plot No. 307/311 1/4, Near Ramdev Chokdi,<br />GIDC Ankleshwar, Gujarat – 393002
                            </div>
                        </div>

                        {/* 2×2 info grid */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                            {INFO_CARDS.map((c) => (
                                <div
                                    key={c.title}
                                    style={{ background: c.color, border: `1.5px solid ${c.border}`, borderRadius: 16, padding: 18, transition: "transform 0.3s,box-shadow 0.3s", cursor: "default" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                                >
                                    <div style={{ fontSize: 24, marginBottom: 6 }}>{c.icon}</div>
                                    <div style={{ fontWeight: 700, color: "#1a202c", fontSize: 13 }}>{c.title}</div>
                                    <div style={{ color: "#718096", fontSize: 11, marginTop: 3 }}>{c.sub}</div>
                                </div>
                            ))}
                        </div>

                        {/* Email card */}
                        <div style={{ background: "#f8faff", border: "1.5px solid #e8edf5", borderRadius: 16, padding: 20 }}>
                            <div style={{ fontWeight: 700, color: "#0e1f5b", fontSize: 14, marginBottom: 12 }}>📧 Reach Us</div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                {["schneider.ankl@gmail.com", "surbhielectric.ankl@gmail.com"].map((em) => (
                                    <a
                                        key={em} href={`mailto:${em}`}
                                        style={{ color: "#1a56db", fontSize: 13, fontWeight: 500, transition: "color 0.2s", wordBreak: "break-all" }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "#e07b00")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "#1a56db")}
                                    >
                                        ✉ {em}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}