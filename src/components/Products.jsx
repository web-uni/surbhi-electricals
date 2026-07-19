// ─── Products.jsx ─────────────────────────────────────────────
import useIntersect from "../hooks/useIntersect";
import { PRODUCTS } from "../data/constants";

/* ── Single product card ── */
function ProductCard({ product, delayClass, visible }) {
    return (
        <div
            className={`product-card fade-up ${delayClass} ${visible ? "visible" : ""}`}
            style={{ height: 360 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
            {/* Background photo */}
            <div className="card-bg" style={{ backgroundImage: `url(${product.image})` }} />
            {/* Subtle category color tint — top strip only, does NOT cover the photo */}
            <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(180deg, ${product.color}55 0%, ${product.color}22 45%, transparent 70%)`,
            }} />
            <div className="card-overlay" />

            <div className="card-content">
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>
                        {product.icon}
                    </div>
                    <span style={{ background: product.accent, color: "white", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 50, letterSpacing: "0.05em" }}>
                        {product.items.length} PRODUCTS
                    </span>
                </div>

                {/* Title */}
                <div style={{ marginTop: 20 }}>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 24, color: "white", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                        {product.title}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, marginTop: 2 }}>{product.subtitle}</div>
                </div>

                {/* Hover item list */}
                <div className="items-list" style={{ marginTop: 14 }}>
                    {product.items.slice(0, 5).map((item) => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                            <div style={{ width: 5, height: 5, borderRadius: "50%", background: product.accent, flexShrink: 0 }} />
                            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 12, fontWeight: 500 }}>{item}</span>
                        </div>
                    ))}
                </div>

                {/* Bottom brands */}
                <div style={{ marginTop: "auto" }}>
                    <div className="see-hint" style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 8 }}>
                        Hover to explore →
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "8px 12px" }}>
                        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>Brands</div>
                        <div style={{ color: "white", fontSize: 11, fontWeight: 500 }}>{product.brands}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const DELAYS = ["", "d1", "d2", "d3", "d4", "d5", "d6", "d1"];

export default function Products() {
    const [ref, visible] = useIntersect();

    return (
        <section id="products" className="section-pad" style={{ padding: "100px 24px", background: "#f8faff" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>

                {/* Header */}
                <div ref={ref} className={`fade-up ${visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 56 }}>
                    <span className="section-tag">Our Products</span>
                    <h2 className="section-heading">Complete Electrical Product Range</h2>
                    <p className="section-subtext" style={{ maxWidth: 560, margin: "0 auto" }}>
                        One trusted source for every industrial electrical requirement — from switchgear to LED lighting.
                    </p>
                </div>

                {/* Grid */}
                <div
                    className="products-grid"
                    style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}
                >
                    {PRODUCTS.map((p, i) => (
                        <ProductCard key={p.id} product={p} delayClass={DELAYS[i % DELAYS.length]} visible={visible} />
                    ))}
                </div>

                {/* CTA */}
                <div className={`fade-up d4 ${visible ? "visible" : ""}`} style={{ textAlign: "center", marginTop: 48 }}>
                    <button
                        className="btn-primary"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Enquire About Any Product →
                    </button>
                </div>
            </div>
        </section>
    );
}