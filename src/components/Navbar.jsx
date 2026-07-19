// ─── Navbar.jsx ───────────────────────────────────────────────
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/constants";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    /* Shadow on scroll */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Active section tracking */
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        const match = NAV_LINKS.find(
                            (l) => l.toLowerCase().replace(" ", "-") === e.target.id
                        );
                        if (match) setActive(match);
                    }
                });
            },
            { threshold: 0.35 }
        );
        NAV_LINKS.forEach((l) => {
            const el = document.getElementById(l.toLowerCase().replace(" ", "-"));
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase().replace(" ", "-"))
            ?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <nav
            style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
                backdropFilter: "blur(16px)",
                borderBottom: scrolled ? "1px solid #e8edf5" : "1px solid transparent",
                boxShadow: scrolled ? "0 4px 24px rgba(0,0,30,0.08)" : "none",
                transition: "all 0.3s ease",
            }}
        >
            {/* ── Main bar ── */}
            <div
                style={{
                    maxWidth: 1280, margin: "0 auto",
                    padding: "0 24px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    height: 68,
                }}
            >
                {/* Logo */}
                <div
                    onClick={() => scrollTo("home")}
                    style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", flexShrink: 0 }}
                >
                    <div
                        style={{
                            width: 40, height: 40,
                            background: "linear-gradient(135deg,#1a56db,#0e3fa3)",
                            borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(26,86,219,0.35)",
                        }}
                    >
                        <span style={{ color: "white", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 20 }}>S</span>
                    </div>
                    <div>
                        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 15, color: "#0e1f5b", letterSpacing: "0.03em", lineHeight: 1.1 }}>
                            SURBHI ELECTRICALS
                        </div>
                        <div style={{ fontSize: 9, fontWeight: 600, color: "#1a56db", letterSpacing: "0.13em", textTransform: "uppercase" }}>
                            &amp; Hardware · GIDC Ankleshwar
                        </div>
                    </div>
                </div>

                {/* Desktop nav links */}
                <div className="nav-desktop" style={{ display: "flex", gap: 4, alignItems: "center" }}>
                    {NAV_LINKS.map((l) => (
                        <button key={l} onClick={() => scrollTo(l)} className={`nav-link ${active === l ? "active" : ""}`}>
                            {l}
                        </button>
                    ))}
                </div>

                {/* Right: CTA + hamburger */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <a
                        href="tel:9998514845"
                        className="btn-primary"
                        style={{ padding: "9px 18px", fontSize: 13, borderRadius: 10 }}
                    >
                        📞 Call Now
                    </a>

                    {/* Hamburger — hidden on desktop via GlobalStyles */}
                    <button
                        className="nav-hamburger"
                        onClick={() => setMenuOpen((o) => !o)}
                        style={{
                            display: "none",               /* shown by media query */
                            flexDirection: "column", justifyContent: "center", alignItems: "center",
                            gap: 5, background: "none", border: "none", cursor: "pointer", padding: 6,
                        }}
                        aria-label="Toggle menu"
                    >
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                style={{
                                    width: 22, height: 2, background: "#374151", borderRadius: 2,
                                    transition: "transform 0.3s, opacity 0.3s",
                                    transform:
                                        menuOpen && i === 0 ? "translateY(7px) rotate(45deg)"
                                            : menuOpen && i === 1 ? "scaleX(0)"
                                                : menuOpen && i === 2 ? "translateY(-7px) rotate(-45deg)"
                                                    : "none",
                                    opacity: menuOpen && i === 1 ? 0 : 1,
                                }}
                            />
                        ))}
                    </button>
                </div>
            </div>

            {/* ── Mobile slide-down menu ── */}
            <div
                className="nav-mobile-menu"
                style={{
                    overflow: "hidden",
                    maxHeight: menuOpen ? 400 : 0,
                    transition: "max-height 0.35s ease",
                    background: "white",
                    borderTop: menuOpen ? "1px solid #f0f4ff" : "none",
                }}
            >
                <div style={{ padding: "12px 20px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
                    {NAV_LINKS.map((l) => (
                        <button
                            key={l}
                            onClick={() => scrollTo(l)}
                            className={`nav-link ${active === l ? "active" : ""}`}
                            style={{ textAlign: "left", width: "100%" }}
                        >
                            {l}
                        </button>
                    ))}
                    <a
                        href="tel:9998514845"
                        style={{
                            marginTop: 8,
                            display: "block", textAlign: "center",
                            background: "linear-gradient(135deg,#F5A623,#f78c00)",
                            color: "#7a3f00", fontWeight: 700, fontSize: 14,
                            padding: "11px 0", borderRadius: 12,
                        }}
                    >
                        📞 Call: 9998514845
                    </a>
                </div>
            </div>
        </nav>
    );
}