// ─── Hero.jsx ─────────────────────────────────────────────────
import useIntersect from "../hooks/useIntersect";
import { STATS } from "../data/constants";

const FEATURE_CARDS = [
    { icon: "⚡", label: "Switchgear", sub: "MCB · MCCB · Contactors", color: "#1d4ed8" },
    { icon: "🔌", label: "Cables", sub: "Armored · Flexible · CAT6", color: "#0891b2" },
    { icon: "💡", label: "Lighting", sub: "LED · Street · Flood", color: "#d97706" },
    { icon: "🗄️", label: "Panels", sub: "FLP / WP / IP Rated", color: "#7c3aed" },
    { icon: "🌍", label: "Earthing", sub: "Strips · Plates · Electrodes", color: "#059669" },
    { icon: "🔧", label: "Accessories", sub: "Glands · Lugs · Trays", color: "#db2777" },
];

export default function Hero() {
    const [ref, visible] = useIntersect();

    const scrollProducts = () =>
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    const scrollContact = () =>
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="home"
            style={{
                minHeight: "100vh",
                display: "flex", alignItems: "center",
                background: "linear-gradient(135deg,#050e2e 0%,#0a1f5c 45%,#0d2d6b 70%,#0f3460 100%)",
                position: "relative", overflow: "hidden",
                paddingTop: 68,
            }}
        >
            {/* Grid background */}
            <div style={{
                position: "absolute", inset: 0, opacity: 0.07,
                backgroundImage: "linear-gradient(#4a9fff 1px,transparent 1px),linear-gradient(90deg,#4a9fff 1px,transparent 1px)",
                backgroundSize: "60px 60px",
                pointerEvents: "none",
            }} />

            {/* Glow orbs */}
            <div style={{ position: "absolute", top: "15%", right: "8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle,rgba(26,86,219,0.35) 0%,transparent 70%)", filter: "blur(40px)", animation: "float 8s ease-in-out infinite", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,166,35,0.18) 0%,transparent 70%)", filter: "blur(50px)", animation: "float 10s ease-in-out infinite 2s", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "50%", left: "40%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle,rgba(79,209,197,0.12) 0%,transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

            <div
                ref={ref}
                className="section-container"
                style={{ width: "100%", paddingTop: 60, paddingBottom: 60, position: "relative", zIndex: 2 }}
            >
                {/* Two-column grid (collapses to 1 col on tablet/mobile) */}
                <div
                    className={`hero-grid fade-up ${visible ? "visible" : ""}`}
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}
                >
                    {/* ── Left copy ── */}
                    <div>
                        {/* Badge */}
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)",
                            color: "#FFCC5C", fontSize: 12, fontWeight: 600,
                            padding: "6px 16px", borderRadius: 50, letterSpacing: "0.08em",
                            textTransform: "uppercase", marginBottom: 24,
                        }}>
                            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#F5A623", animation: "glow-pulse 2s ease-in-out infinite" }} />
                            House of Industrial Electrical Goods
                        </div>

                        {/* Headline */}
                        <h1 style={{
                            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900,
                            fontSize: "clamp(2.8rem,5.5vw,5.5rem)", lineHeight: 1.0,
                            color: "white", margin: "0 0 24px", textTransform: "uppercase", letterSpacing: "0.01em",
                        }}>
                            Power Your<br />
                            <span style={{ color: "#F5A623", WebkitTextStroke: "1px rgba(245,166,35,0.3)" }}>Industry</span><br />
                            <span style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.72em" }}>With Quality</span>
                        </h1>

                        <p style={{ color: "#93b4e8", fontSize: "clamp(14px,2vw,17px)", lineHeight: 1.75, maxWidth: 480, marginBottom: 36 }}>
                            Leading dealer &amp; supplier of industrial switchgear, cables, lighting &amp; control components in GIDC Ankleshwar, Gujarat.
                        </p>

                        {/* Buttons */}
                        <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
                            <button className="btn-primary" onClick={scrollProducts}>Explore Products →</button>
                            <button className="btn-outline" onClick={scrollContact}>Get a Quote</button>
                        </div>

                        {/* Phone quick links */}
                        <div className="hero-phones" style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                            {["9998514845", "8239539533", "9079256241"].map((n) => (
                                <a
                                    key={n} href={`tel:${n}`}
                                    style={{ display: "flex", alignItems: "center", gap: 8, color: "#93b4e8", fontSize: 13, fontWeight: 500, transition: "color 0.2s" }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F5A623")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "#93b4e8")}
                                >
                                    <span style={{ width: 32, height: 32, background: "rgba(255,255,255,0.08)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>📞</span>
                                    {n}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Right feature grid — hidden on tablets ── */}
                    <div className="hero-feature-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                        {FEATURE_CARDS.map((item) => (
                            <div
                                key={item.label}
                                onClick={scrollProducts}
                                style={{
                                    background: `linear-gradient(135deg,${item.color}33,${item.color}18)`,
                                    border: `1px solid ${item.color}44`,
                                    borderRadius: 16, padding: 20, cursor: "pointer",
                                    transition: "transform 0.3s,box-shadow 0.3s,border-color 0.3s",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = `${item.color}99`; e.currentTarget.style.boxShadow = `0 16px 40px ${item.color}30`; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = `${item.color}44`; e.currentTarget.style.boxShadow = "none"; }}
                            >
                                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                                <div style={{ color: "white", fontWeight: 700, fontSize: 15 }}>{item.label}</div>
                                <div style={{ color: "#93b4e8", fontSize: 11, marginTop: 4 }}>{item.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Stats row ── */}
                <div
                    className={`hero-stats-grid fade-up d5 ${visible ? "visible" : ""}`}
                    style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 60 }}
                >
                    {STATS.map((s) => (
                        <div key={s.label} className="stat-card">
                            <div style={{ fontSize: 24, marginBottom: 6 }}>{s.icon}</div>
                            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 40, color: "#F5A623", lineHeight: 1 }}>{s.value}</div>
                            <div style={{ color: "#93b4e8", fontSize: 13, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}