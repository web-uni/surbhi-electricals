// ─── Brands.jsx ───────────────────────────────────────────────
import { useState } from "react";
import useIntersect from "../hooks/useIntersect";
import { BRAND_LOGOS } from "../data/constants";

/* ── Single logo tile inside the ticker ── */
function TickerLogo({ brand }) {
    const [failed, setFailed] = useState(false);
    return (
        <div
            style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "0 28px", transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.12)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <div
                style={{ width: 148, height: 72, background: "white", borderRadius: 12, border: "1.5px solid #e8edf5", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 18px", boxShadow: "0 2px 12px rgba(0,30,100,0.06)", transition: "border-color 0.3s,box-shadow 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#93c5fd"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(26,86,219,0.14)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e8edf5"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,30,100,0.06)"; }}
            >
                {!failed ? (
                    <img
                        src={brand.logo} alt={brand.name}
                        style={{ maxHeight: 46, maxWidth: 116, objectFit: "contain", filter: "grayscale(20%)", transition: "filter 0.3s" }}
                        onError={() => setFailed(true)}
                        onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                        onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(20%)")}
                    />
                ) : (
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 13, color: brand.bg, letterSpacing: "0.04em", textAlign: "center" }}>
                        {brand.name}
                    </span>
                )}
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                {brand.name}
            </span>
        </div>
    );
}

/* ── Animated dual-row ticker ── */
function BrandTicker() {
    const row1 = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];
    const row2 = [...[...BRAND_LOGOS].reverse(), ...[...BRAND_LOGOS].reverse(), ...[...BRAND_LOGOS].reverse()];

    const fadeEdge = (dir) => ({
        position: "absolute", top: 0, bottom: 0, width: 90, zIndex: 2, pointerEvents: "none",
        background: `linear-gradient(to ${dir === "left" ? "right" : "left"}, white, transparent)`,
        [dir]: 0,
    });

    return (
        <div style={{ marginTop: 64, overflow: "hidden" }}>
            {/* Divider label */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, justifyContent: "center" }}>
                <div style={{ height: 1, flex: 1, maxWidth: 120, background: "linear-gradient(to right,transparent,#e2e8f0)" }} />
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em", whiteSpace: "nowrap" }}>
                    ⚡ Our Trusted Partners
                </span>
                <div style={{ height: 1, flex: 1, maxWidth: 120, background: "linear-gradient(to left,transparent,#e2e8f0)" }} />
            </div>

            {/* Row 1 — left */}
            <div style={{ position: "relative", marginBottom: 16 }}>
                <div style={fadeEdge("left")} />
                <div style={fadeEdge("right")} />
                <div
                    style={{ display: "flex", alignItems: "center", animation: "ticker-left 30s linear infinite", width: "max-content" }}
                    onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
                    onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
                >
                    {row1.map((b, i) => <TickerLogo key={`r1-${i}`} brand={b} />)}
                </div>
            </div>

            {/* Row 2 — right */}
            <div style={{ position: "relative" }}>
                <div style={fadeEdge("left")} />
                <div style={fadeEdge("right")} />
                <div
                    style={{ display: "flex", alignItems: "center", animation: "ticker-right 36s linear infinite", width: "max-content" }}
                    onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
                    onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
                >
                    {row2.map((b, i) => <TickerLogo key={`r2-${i}`} brand={b} />)}
                </div>
            </div>
        </div>
    );
}

/* ── Main section ── */
export default function Brands() {
    const [ref, visible] = useIntersect();

    return (
        <section id="brands" className="section-pad" style={{ padding: "100px 24px", background: "white" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>

                {/* Header */}
                <div ref={ref} className={`fade-up ${visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 56 }}>
                    <span className="section-tag">Brands We Carry</span>
                    <h2 className="section-heading">Authorised Dealer for Leading Brands</h2>
                    <p className="section-subtext" style={{ maxWidth: 540, margin: "0 auto" }}>
                        We stock and supply from India's and the world's most trusted electrical manufacturers — all genuine, certified products.
                    </p>
                </div>

                {/* Logo grid */}
                <div
                    className="brands-grid"
                    style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 20 }}
                >
                    {BRAND_LOGOS.map((brand, i) => (
                        <div
                            key={brand.name}
                            className={`brand-card fade-up ${i < 4 ? `d${i + 1}` : ""} ${visible ? "visible" : ""}`}
                        >
                            <div className="logo-area">
                                <img
                                    src={brand.logo} alt={brand.name}
                                    onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                                />
                                {/* Fallback */}
                                <div style={{ display: "none", alignItems: "center", justifyContent: "center", width: "100%", height: 44, background: brand.bg, borderRadius: 10, color: "white", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 15, letterSpacing: "0.05em", textAlign: "center", padding: "0 8px" }}>
                                    {brand.name}
                                </div>
                            </div>
                            <div style={{ padding: "12px 16px 14px" }}>
                                <div style={{ fontWeight: 700, color: "#1a202c", fontSize: 13 }}>{brand.name}</div>
                                <div style={{ fontSize: 10, fontWeight: 600, color: "white", background: brand.bg, padding: "2px 8px", borderRadius: 50, display: "inline-block", marginTop: 6, letterSpacing: "0.05em" }}>
                                    {brand.category}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Ticker */}
                <BrandTicker />
            </div>
        </section>
    );
}