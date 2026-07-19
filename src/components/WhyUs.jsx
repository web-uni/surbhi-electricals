// ─── WhyUs.jsx ────────────────────────────────────────────────
import useIntersect from "../hooks/useIntersect";
import { WHY_US } from "../data/constants";

export default function WhyUs() {
    const [ref, visible] = useIntersect();

    return (
        <section
            id="why-us"
            className="section-pad"
            style={{
                padding: "100px 24px",
                background: "linear-gradient(135deg,#050e2e 0%,#0a1f5c 50%,#0d2d6b 100%)",
                position: "relative", overflow: "hidden",
            }}
        >
            {/* Dot grid */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle,white 1px,transparent 1px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />

            <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
                {/* Header */}
                <div ref={ref} className={`fade-up ${visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
                    <span style={{ display: "inline-block", background: "rgba(245,166,35,0.2)", border: "1px solid rgba(245,166,35,0.4)", color: "#FFCC5C", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 20, marginBottom: 12 }}>
                        Why Choose Us
                    </span>
                    <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,3.5vw,3.2rem)", color: "white", textTransform: "uppercase", margin: "0 0 16px" }}>
                        The Surbhi Advantage
                    </h2>
                    <p style={{ color: "#93b4e8", fontSize: "clamp(14px,2vw,16px)", maxWidth: 520, margin: "0 auto" }}>
                        We're more than a supplier — your electrical procurement partner for quality, speed, and reliability.
                    </p>
                </div>

                {/* Cards */}
                <div
                    className="whyus-grid"
                    style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}
                >
                    {WHY_US.map((item, i) => (
                        <div key={item.title} className={`why-card fade-up d${i + 1} ${visible ? "visible" : ""}`}>
                            <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 18 }}>
                                {item.icon}
                            </div>
                            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 22, color: "white", marginBottom: 10, textTransform: "uppercase" }}>
                                {item.title}
                            </div>
                            <div style={{ color: "#93b4e8", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}